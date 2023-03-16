import { useCallback, useState } from 'react';
import { StereoAudioRecorder} from 'recordrtc';

interface UseAudioRecorderProps{
    onStop: (blob:Blob, blobUrl:string) => void;
    onStart: () => void;
}

export default function useAudioRecorder({onStop,onStart}:UseAudioRecorderProps){
    const [stream,setStream] = useState<MediaStream>();
    const [recorderRTC,setRecorderRTC] = useState<StereoAudioRecorder>();
  

    const handleStart = useCallback(async () =>{
        const stream:MediaStream = await navigator.mediaDevices.getUserMedia({audio:true});
        const recorder= new StereoAudioRecorder(stream,{mimeType:"audio/wav"});
        setStream(stream);
        setRecorderRTC(recorder);
        recorder.record();
        onStart();
    },[onStart]);

    const handleStop = useCallback(() =>{
        if(recorderRTC === undefined || stream === undefined) return;
        recorderRTC.stop((blob)=>{
            onStop(blob, URL.createObjectURL(blob));
        });
        stream.getAudioTracks().forEach(track=>track.stop());
    },[onStop, recorderRTC, stream]);
    
    return {
        start:handleStart,stop:handleStop
    };
}