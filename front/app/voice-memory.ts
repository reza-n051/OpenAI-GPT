import { createContext, useContext } from "react";

export interface Voice{
    id:string;
    blobUrl:string;
    sender:string;
}
export interface VMType {
    voices:Voice[];
    setVoices:any;
}

export const VMContext = createContext<VMType>({voices:[],setVoices:()=>{}});

export function useVMContext(){
    return useContext(VMContext);
}