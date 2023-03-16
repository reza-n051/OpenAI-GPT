import eventlet
import socketio
import speech_recognition as sr
import openai
from gtts import gTTS,gTTSError
from uuid import uuid4
import os

# openai.api_key = os.environ['OPENAI_KEY']
openai.api_key = "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"
FILE_STORE_PATH = "./data/"
server = socketio.Server(cors_allowed_origins='*',max_http_buffer_size=100000000)
app = socketio.WSGIApp(server)
r = sr.Recognizer()

@server.event
def connect(id,data):
    print(id)

@server.event
def disconnect(id):
    print(id)

@server.event
def query(id,data):
    print("start")
    response = {
        "status":False,
        "data":"Try Again ..."
    }
    #save query file in memory
    filename = uuid4()
    query_file_path =  '{path}{filename}-query.wav'.format( path=FILE_STORE_PATH,filename=filename)
    answer_file_path = '{path}{filename}-answer.mp3'.format(path=FILE_STORE_PATH,filename=filename)
    try:
        with open(query_file_path,mode='bx') as file:
            file.write(data)
    except Exception as e:
        server.emit('answer',response,to=id)
        return

    try:
        #read file and convert it to text
        x = open(query_file_path,"rb")
        query_ text= openai.Audio.transcribe("whisper-1",x)
        print(query_text) 
        # audio_file = sr.AudioFile(query_file_path)
        # with audio_file as af:
        #     audio = r.record(af)
        # query_ text= r.recognize_google(audio)
        print('query :: {a}'.format(a=query_text))

    except Exception as e:
        print(e)
        server.emit('answer',response,to=id)
        return

    #chat with gpt-3
    try:
        ai_response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=query_text,
        )
        ai_res_ text= ai_response['choices'][0]['text']
        print('answer :: {a}'.format(a=ai_res_text))
        ai_res_is_successful = True
    except Exception as e:
        ai_res_ text= str(e)
        ai_res_is_successful = False
    if(ai_res_is_successful == False):
        server.emit('answer',response,to=id)
        return
    
    try:
        #convert  textto speech
        answer_audio = gTTS(text=ai_res_text,lang="en",slow=False)
        answer_audio.save(answer_file_path)

        #send answer file to client
        f = open(answer_file_path,mode="rb")
        answer_audio_mp3_file = f.read()
        response = {
            "status":True,
            "data":answer_audio_mp3_file
        }
        server.emit('answer',response,to=id)
    except Exception as e:
        server.emit('answer',response,to=id)
        return

    # except gTTSError:
    #     server.emit('answer',"Error")
    #     return




if __name__ == "__main__":
    eventlet.wsgi.server(eventlet.listen(('',8000)),app)
