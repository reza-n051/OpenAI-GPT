import openai

#arg1   speech_path : path where speech file is saved
#arg2   language    : language of query
#result text        : text of speech 
def speech_to_text(
        speech_path,
        language
    ):
    x = open(speech_path,"rb")
    text = openai.Audio.transcribe(
        model="whisper-1",
        file=x,
        language=language
    )["text"]
    return text
