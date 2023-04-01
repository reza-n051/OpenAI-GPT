import openai

def speech_to_text(
        text_path,
        language
    ):
    x = open(text_path,"rb")
    query_ text= openai.Audio.transcribe(
        model="whisper-1",
        file=x,
        language=language
    )["text"]
    return query_text
