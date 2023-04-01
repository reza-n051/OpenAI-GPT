import { useContext,createContext, } from "react";

export interface LoadingContextType{
    isLoading:boolean;
    setIsLoading:any;
}

export const LoadingCon text= createContext<LoadingContextType>({isLoading:false,setIsLoading:()=>{}});

export function useLoadingContext(){
    return useContext(LoadingContext);
}
