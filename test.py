from gtts import gTTS
import requests
def text_to_speech(index,limit,text,lang,file_path,ariana_key):
    try:
        #convert  textto speech
        answer_audio = gTTS(text=text,lang=lang,slow=False)
        answer_audio.save(file_path)
    except Exception as e:
        if(index >= limit) : 
            raise e
        else:
            text_to_speech(index+1,limit,text,lang,file_path)




def text_to_speech_persian(index,limit,text,file_path,ariana_key):
    text_words = text.split(" ")
    text_words_len = len(text_words)
    text_parts = list()
    sentence = ""
    for i in range(text_words_len):
        if((i+1) % 20 == 0 or i+1 == text_words_len):
            sentence = sentence + text_words[i]     
            text_parts.append(sentence)
            sentence = ""            
        else:
            sentence = sentence + text_words[i]
    query_len = len(text_parts)
    if(query_len == 1):
        tts_persian(index,limit,text,'{file_path}.mp3'.format(file_path=file_path),ariana_key)
        return
    try:
        for i in range(query_len):
            query_ text= text_parts[i]
            tts_persian(index,limit,query_text,'{file_path}_{i}.mp3'.format(file_path=file_path,i=i+1),ariana_key)
    except Exception as e:
        raise e
    if(query_len == 2):
        f1 = open('{file_path}_1.mp3'.format(file_path=file_path),'rb')
        b1 = f1.read()
        f1.close()
        f2 = open('{file_path}_2.mp3'.format(file_path=file_path),'rb')
        b2 = f2.read()
        f2.close()
        b = b1 + b2
        f = open('{file_path}.mp3'.format(file_path=file_path),'wb')
        f.write(b)
        f.close()
        return

    audios = list()
    try:
        for i in range(query_len):
            f = open('{file_path}_{i}.mp3'.format(file_path=file_path,i=i+1),'rb')
            audio = f.read()
            f.close()
            audios.append(audio)
        #append mp3 files toghether
        result_speech = audios[0]
        for i in range(1,query_len):
            result_speech = result_speech + audios[i]
        f = open('{file_path}.mp3'.format(file_path=file_path),'wb')
        f.write(result_speech)
        f.close()
    except Exception as e:
        raise e



        

def tts_persian(index,limit,text,file_path,ariana_key):
    try:
        #convert  textto speech
        r = requests.post("http://api.farsireader.com/ArianaCloudService/ReadText",json={
            "Text" : text,
            "Speaker":"Famale1",
            "Quality":"normal",
            "Format":"mp3",
            "PunctuationLevel":"3",
            "APIKey":ariana_key
        },headers={'Content-type':'application/json'})
        with open(file_path,mode='wb') as file:
            file.write(r.content)
                    
    except Exception as e:
        if(index >= limit) : 
            raise e
        else:
            tts_persian(index+1,limit,text,file_path,ariana_key)
 text= 'وقتی ثروت‌ های بزرگ به دست برخی مردم می‌ افتد در پرتو آن نیرومند می‌ شوند وقتی ثروت‌ های بزرگ به دست برخی مردم می‌ افتد در پرتو آن نیرومند می‌ شوند وقتی ثروت‌ های بزرگ به دست برخی مردم می‌ افتد در پرتو آن نیرومند می‌ شوند وقتی ثروت‌ های بزرگ به دست برخی مردم می‌ افتد در پرتو آن نیرومند می‌ شوند وقتی ثروت‌ های بزرگ به دست برخی مردم می‌ افتد در پرتو آن نیرومند می‌ شوند وقتی ثروت‌ های بزرگ به دست برخی مردم می‌ افتد در پرتو آن نیرومند می‌ شوند وقتی ثروت‌ های بزرگ به دست برخی مردم می‌ افتد در پرتو آن نیرومند می‌ شوند'
# text_to_speech(0,3,text,"ur",'text',"text")
tts_persian(0,3,text,'./mrkj0',"text")
# text_to_speech_persian(0,3,text,'./mr0',"text")
