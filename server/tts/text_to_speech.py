from gtts import gTTS
import requests

#arg1 index       if app fail in converting speech to text it will try a few more times up to the limit(arg2)  (if there was an error)
#arg2 limit       maximum effort of app for convert text to speech (if there was an error)
#arg3 text        text that will be converted to speech
#arg4 lang        the language of the text that will be converted to speech  
#arg5 file_path   path where speech will be saved
#arg6 ariana_key  needed for convert persian text to speech
def text_to_speech(index,limit,text,lang,file_path,ariana_key):
    try:
        if(lang == "fa"):
            #convert text to speech
            r = requests.post(
                "http://api.farsireader.com/ArianaCloudService/ReadText",
                json={
                    "Text" : text,
                    "Speaker":"Male1",
                    "Quality":"normal",
                    "Format":"mp3",
                    "APIKey":ariana_key
                },
                headers={
                    'Content-type':'application/json'
                })
            with open(file_path,mode='wb') as file:
                file.write(r.content)
                    
        else:
            #convert text to speech
            answer_audio = gTTS(
                text=text,
                lang=lang,
                slow=False
            )
            answer_audio.save(file_path)
    except Exception as e:
        if(index >= limit) : 
            raise e
        else:
            text_to_speech(index+1,limit,text,lang,file_path)


