import { useContext,createContext, useEffect, useState } from "react";
import type {Socket} from 'socket.io-client';
import {io} from 'socket.io-client';
import type { VMType, Voice } from './voice-memory';
import {toast} from 'react-hot-toast';

export const SocketCon text= createContext<Socket|undefined>(undefined);

export function useSocketContext(){
    return useContext(SocketContext);
}

export function useSocket(){
    const [socket,setSocket] = useState<Socket>();
    useEffect(()=>{
        const socket = io(`${window.ENV.SERVER_IP}:${window.ENV.SERVER_PORT}/`);
        // const socket = io("http://localhost:8000/");
        setSocket(socket);
        return ()=>{
            socket.close();
        };
    },[]);
    return socket;
}
export function useChat(vm_handler:VMType){
    const socket = useSocketContext();
    useEffect(()=>{
        if(socket === undefined) return;
        
        socket.on("answer",(data)=>{
            const status = data["status"];
            if(status === false){
                toast.error("Try Again ...");
                return;
            }
            const buffer = data["data"];
            console.log(data)
            //data is arrayBuffer.
            //i convert to blob
            const blob = new Blob([buffer]);
            const bloburl = URL.createObjectURL(blob);
            vm_handler.setVoices((voices:Voice[])=>{
                const v:Voice = {blobUrl:bloburl,id:'0',sender:'0'};
                return [...voices,v]
            });
        });
        return () => {
            socket.off("answer");
        }
    },[socket,vm_handler]);
    const sendVoiceMessage = (voice:Blob,lang:string) => {
        if(socket === undefined) return;
        const bloburl = URL.createObjectURL(voice);
        vm_handler.setVoices((voices:Voice[])=>{
            const v:Voice = {blobUrl:bloburl,id:'1',sender:'1'};
            return [...voices,v]
        });
        // const file = new File([voice],"v.wav");
        console.log(voice)
        socket.emit("query",{audio:voice,lang});
    };
    
    return {sendVoiceMessage};
}