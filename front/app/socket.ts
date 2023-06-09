import { useContext,createContext, useEffect, useState } from "react";
import type {Socket} from 'socket.io-client';
import {io} from 'socket.io-client';
import type { VMType, Voice } from './voice-memory';
import {toast} from 'react-hot-toast';
import { useLoadingContext } from "./loading";
import { isoToText } from "./language-util";

export const SocketContext = createContext<Socket|undefined>(undefined);

export function useSocketContext(){
    return useContext(SocketContext);
}

export function useSocket(){
    const [socket,setSocket] = useState<Socket>();
    useEffect(()=>{
        let socket:Socket;
        if(process.env.NODE_ENV == "production"){
            socket = io(`${window.ENV.SERVER_IP}/`);
        }else{
            socket = io(`${window.ENV.SERVER_IP}:${window.ENV.SERVER_PORT}/`);
        }
        setSocket(socket);
        return ()=>{
            socket.close();
        };
    },[]);
    return socket;
}
export function useChat(vm_handler:VMType){
    const socket = useSocketContext();
    const {setIsLoading}  = useLoadingContext();
    useEffect(()=>{
        if(socket === undefined) return;
        
        socket.on("answer",(data)=>{
            const status = data["status"];
            if(status === false){
                toast.error("Try Again ...");
                setIsLoading(false);
                return;
            }
            const buffer = data["data"];
            //data is arrayBuffer.
            //i convert to blob
            const blob = new Blob([buffer]);
            const bloburl = URL.createObjectURL(blob);
            vm_handler.setVoices((voices:Voice[])=>{
                const v:Voice = {blobUrl:bloburl,id:'0',sender:'0'};
                return [...voices,v]
            });
            setIsLoading(false);
        });
        return () => {
            socket.off("answer");
        }
    },[socket,vm_handler]);
    const sendVoiceMessage = (voice:Blob,iso_lang:string) => {
        if(socket === undefined) return;
        setIsLoading(true);
        const text_lang = isoToText(iso_lang);
        const bloburl = URL.createObjectURL(voice);
        vm_handler.setVoices((voices:Voice[])=>{
            const v:Voice = {blobUrl:bloburl,id:'1',sender:'1'};
            return [...voices,v]
        });
        // const file = new File([voice],"v.wav");
        console.log(voice)
        socket.emit("query",{audio:voice,iso_language:iso_lang,text_language:text_lang});
    };
    
    return {sendVoiceMessage};
}