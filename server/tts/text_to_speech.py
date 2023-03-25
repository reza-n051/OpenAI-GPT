from gtts import gTTS

def text_to_speech(index,limit,text,lang,file_path):
    try:
        if(lang == "fa"):
            #convert  textto speech
            answer_audio = gTTS(text=text,lang="ur",slow=False)
            answer_audio.save(file_path)
        else:
            #convert  textto speech
            answer_audio = gTTS(text=text,lang=lang,slow=False)
            answer_audio.save(file_path)
    except Exception as e:
        if(index >= limit) : 
            raise e
        else:
            text_to_speech(index+1,limit,text,lang,file_path)
