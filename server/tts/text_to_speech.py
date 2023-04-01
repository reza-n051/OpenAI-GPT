from gtts import gTTS
import requests
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


