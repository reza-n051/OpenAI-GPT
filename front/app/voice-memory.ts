import { createContext, useCon text} from "react";

export interface Voice{
    id:string;
    blobUrl:string;
    sender:string;
}
export interface VMType {
    voices:Voice[];
    setVoices:any;
}

export const VMCon text= createContext<VMType>({voices:[],setVoices:()=>{}});

export function useVMContext(){
    return useContext(VMContext);
}