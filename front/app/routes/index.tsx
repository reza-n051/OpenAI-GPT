import {ClientOnly} from 'remix-utils';
import { Message } from "~/components/message";
import {AudioRecorder} from "~/components/audio-recorder3.client";
import { useVMCon text} from '~/voice-memory';
import { useState } from 'react';
import LanguageSelector from '~/components/language-selector';
export default function Index() {
  const {voices} = useVMContext();
  const [lang,setLang] = useState<string>('en');
  return (
    <div className="flex flex-col w-full bg-primary lg:w-[55%] xl:w-[35%] mx-auto min-h-screen max-h-screen h-screen">
      <header className="flex flex-row w-full h-32 bg-secondary">
        <span className="my-auto ml-2 lg:ml-16 text-primary font-mono font-extrabold text-3xl">
          OpenAI/GPT
        </span>
        <div className="my-auto ml-auto mr-6">
          <LanguageSelector lang={lang} setLang={setLang} />
        </div>
      </header>
      <div className="w-full msg-container p-4 max-h-[calc(100%-14rem)] h-[calc(100%-14rem)] overflow-y-scroll flex flex-col">

      {
        voices.length === 0 ? 
        <div className="text-secondary font-mono font-extrabold flex flex-col">
          <p className='text-3xl mx-auto mt-52'>WELCOME</p>
          <p className='text-xl  mx-auto mt-12'>For Start Chatting with ChatGPT Click On Microphone ...</p>
        </div>
        :
        <>
          {
            voices.map((voice)=>
              <div key={voice.id} className="my-4">
                <Message
                  msgOwnerUsername={voice.sender}
                  voiceSrc={voice.blobUrl}
                />
              </div>
            )
          }        
        </>
      }

      </div>
      <ClientOnly fallback={<p>loading .... </p>}>
        {
          ()=> <AudioRecorder lang={lang}/>
        }
      </ClientOnly>
      
    </div>
  );
}
