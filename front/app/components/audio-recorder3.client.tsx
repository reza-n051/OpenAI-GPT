import { AiOutlineDelete } from 'react-icons/ai';
import { TfiControlPause } from 'react-icons/tfi';
import { BsMic } from 'react-icons/bs';
import { useCallback, useState } from 'react';
import Audio from '~/components/audio.client';
import {AiOutlineSend} from 'react-icons/ai';
import useAudioRecorder from '~/audio-recorder.client';
import { useVMContext } from '~/voice-memory';
import { useChat } from '~/socket';

export function AudioRecorder({lang}:{lang:string}) {
    const [blobUrl , setBlobUrl] = useState<string>('');
    const [blob,setBlob] = useState<Blob|null>();
    const {voices,setVoices} = useVMContext();
    const {sendVoiceMessage} = useChat({setVoices,voices});

    const [micState, setMicState] = useState<string>('record');
    const {start,stop} = useAudioRecorder({
        onStart() {
            setMicState("recording");            
        },
        onStop:useCallback((blob:Blob,blobUrl:string)=>{
            setMicState("recorded");
            setBlob(blob);
            setBlobUrl(blobUrl);
        },[]),
    });
    const handleSendVoice = () => {
        if(blob === undefined || blob === null) return;
        sendVoiceMessage(blob,lang);
        setBlob(null);
        setBlobUrl("");
        setMicState("record");    
    };
    const handleDelete = () => {
        setMicState("record");    
        setBlob(null);
        setBlobUrl("");            
    };
    if (micState === "record") {
        return (
            <div className="flex flex-row w-full h-12 bg-secondary text-black">
                <BsMic onClick={start} size={25} className="fill-primary hover:fill-third m-auto" />
            </div>
        )
    } else if (micState === "recording") {
        return (
            <div className="flex flex-row w-full h-12 bg-secondary text-black">
                <TfiControlPause onClick={stop} size={25} className="fill-primary hover:fill-third m-auto" />
            </div>
        )

    } else{
        // else if (micState === "recorded") 
        return (
            <div className="flex flex-row w-full h-12 bg-secondary text-black">
                <div className="my-auto">
                    <div className="h-8 w-8 ml-0 sm:ml-52 lg:ml-16 2xl:ml-20">
                        <AiOutlineDelete onClick={handleDelete} size={25} className="fill-primary hover:fill-third" />
                    </div>
                </div>
                <div className='my-auto h-8 w-52'>
                    <Audio src={blobUrl} />
                </div>
                <div className="my-auto ml-auto">
                    <div className="h-8 w-8">
                        <AiOutlineSend onClick={handleSendVoice} size={25} className="m-auto fill-primary hover:fill-third" />
                    </div>
                </div>

            </div>
        )

    }

}