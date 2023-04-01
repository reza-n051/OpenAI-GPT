import { useContext,createContext, } from "react";

export interface LoadingContextType{
    isLoading:boolean;
    setIsLoading:any;
}

export const LoadingContext = createContext<LoadingContextType>({isLoading:false,setIsLoading:()=>{}});

export function useLoadingContext(){
    return useContext(LoadingContext);
}
