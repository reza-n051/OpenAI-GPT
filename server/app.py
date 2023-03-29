import eventlet
import socketio
import openai
from uuid import uuid4
from revChatGPT.V3 import Chatbot
from dotenv import load_dotenv
import os
from tts.text_to_speech import text_to_speech,text_to_speech_persian

load_dotenv()
openai.api_key = os.environ['OPENAI_KEY']
api_key = os.environ['OPENAI_KEY']
ariana_key = os.environ['ARIANA_KEY']
FILE_STORE_PATH = "./data/"
server = socketio.Server(cors_allowed_origins='*',max_http_buffer_size=100000000)
app = socketio.WSGIApp(server)

@server.event
def connect(_,__):
    print("start connecting ...")

@server.event
def disconnect(_):
    print("disconnecting ...")

@server.event
def query(id,data):
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
            file.write(data["audio"])
    except Exception as e:
        response["data"] = "Your voice is not clear, please speak more clearly"
        server.emit('answer',response,to=id)
        return

    try:
        #read file and convert it to text
        x = open(query_file_path,"rb")
        query_ text= openai.Audio.transcribe("whisper-1",x,language=data["lang"])["text"]
        
        print(query_text) 

    except Exception as e:
        print(e)
        server.emit('answer',response,to=id)
        return

    #chat with chatGPT
    try:
        chatbot = Chatbot(api_key=api_key)
        ai_res_ text= chatbot.ask('please answer my question in lnaguage {lang} . {q}'.format(lang=data["lang"],q=query_text))
        print('answer :: {a}'.format(a=ai_res_text))
        ai_res_is_successful = True
    except Exception as e:
        print(e)
        ai_res_ text= str(e)
        ai_res_is_successful = False
    if(ai_res_is_successful == False):
        server.emit('answer',response,to=id)
        return
    
    try:
        if(data["lang"] == 'fa'):
            text_to_speech_persian(0,3,ai_res_text,data["lang"],answer_file_path,ariana_key)            
        else:
            text_to_speech(0,3,ai_res_text,data["lang"],answer_file_path)
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

if __name__ == "__main__":
    # ai_response = openai.ChatCompletion.create(
    #     model="gpt-3.5-turbo",
    #     messages=[
    #         {"role":"user","content":'please answer my question in language {lang}'.format(lang=data["lang"])},
    #         {"role":"user","content":query_text}
    #     ],
    #     max_tokens=4000
    # )
    # ai_res_ text= ai_response['choices'][0]['message']['content']
    eventlet.wsgi.server(eventlet.listen(('',8000)),app)
