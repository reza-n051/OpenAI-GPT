import {ClientOnly} from 'remix-utils';
import { Message } from "~/components/message";
import {AudioRecorder} from "~/components/audio-recorder3.client";
import { useVMContext } from '~/voice-memory';
import { useState } from 'react';
import LanguageSelector from '~/components/language-selector';
import { useLoadingContext } from '~/loading';
export default function Index() {
  const {voices} = useVMContext();
  const {isLoading} = useLoadingContext();
  const [lang,setLang] = useState<string>('english');
  return (
    <div className="flex flex-col w-full bg-primary lg:w-[55%] xl:w-[35%] mx-auto min-h-screen max-h-screen h-screen">
      <header className="flex flex-row w-full h-32 bg-secondary">
        <span className="flex flex-col my-auto ml-2 lg:ml-16 text-primary font-mono font-extrabold text-3xl h-10">
          <span className="h-8">OpenAI/ChatGPT</span>
          {
            isLoading ? <progress className="progress progress-info bg-primary w-[100%] h-2"></progress> : <></>
          }
        </span>
        <div className="my-auto ml-auto mr-6">
          <LanguageSelector lang={lang} setLang={setLang} />
        </div>
      </header>
      <div className="w-full msg-container p-4 max-h-[calc(100%-14rem)] h-[calc(100%-14rem)] overflow-y-scroll flex flex-col">

      {
        voices.length === 0 ? 
        <div className="text-secondary font-mono font-extrabold flex flex-col">
          <p className='text-2xl mx-auto mt-32'>WELCOME</p>
          <p className='sm:text-xl  mx-auto mt-12'>To Chatting Click On Microphone</p>
          <p className='text-sm min-[380px]:text-base sm:text-xl  mx-auto mt-12'>Please Wait Until The Answer Is Ready</p>
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
