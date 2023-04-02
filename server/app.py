import eventlet
import socketio
import openai
from uuid import uuid4
from revChatGPT.V3 import Chatbot
from dotenv import load_dotenv
import os
from tts.text_to_speech import text_to_speech
from stt.speech_to_text import speech_to_text

#init application
load_dotenv()
openai.api_key = os.environ['OPENAI_KEY']
api_key = os.environ['OPENAI_KEY']
ariana_key = os.environ['ARIANA_KEY']
FILE_STORE_PATH = os.environ['DATA_PATH']
APP_IP = os.environ['APP_IP']
APP_PORT = os.environ['APP_PORT']
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

    filename = uuid4()
    query_file_path =  '{path}{filename}-query.wav'.format( path=FILE_STORE_PATH,filename=filename)
    answer_file_path = '{path}{filename}-answer.mp3'.format(path=FILE_STORE_PATH,filename=filename)

    #save query file in memory
    try:
        with open(query_file_path,mode='bx') as file:
            file.write(data["audio"])
    except Exception as e:
        response["data"] = "Your voice is not clear, please speak more clearly"
        server.emit('answer',response,to=id)
        return

    try:
        #read file and convert it to text
        query_text = speech_to_text(query_file_path,data["iso_language"])
        print(query_text) 

    except Exception as e:
        server.emit('answer',response,to=id)
        return

    #chat with chatGPT
    try:
        chatbot = Chatbot(api_key=api_key)
        ai_res_text = chatbot.ask(
            'please answer my question in lnaguage {lang} . {q}'.format(lang=data["text_language"],q=query_text)
        )
        print('answer :: {a}'.format(a=ai_res_text))
        ai_res_is_successful = True
    except Exception as e:
        print(e)
        ai_res_text = str(e)
        ai_res_is_successful = False
    if(ai_res_is_successful == False):
        server.emit('answer',response,to=id)
        return
    
    try:
        text_to_speech(0,3,ai_res_text,data["iso_language"],answer_file_path,ariana_key)            
        #send answer file to client
        f = open(answer_file_path,mode="rb")
        answer_audio_mp3_file = f.read()
        f.close()
        response = {
            "status":True,
            "data":answer_audio_mp3_file
        }
        server.emit('answer',response,to=id)
    except Exception as e:
        server.emit('answer',response,to=id)
        return
    try:
        os.remove(query_file_path)
        os.remove(answer_file_path)
    except Exception as e:
        print(str(e))        
    return

if __name__ == "__main__":
    eventlet.wsgi.server(eventlet.listen((APP_IP,int(APP_PORT))),app)
