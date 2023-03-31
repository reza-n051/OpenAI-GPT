import openai

def speech_to_text(
        text_path,
        language
    ):
    x = open(text_path,"rb")
    query_ text= openai.Audio.transcribe("whisper-1",x,language)["text"]
    return query_text
