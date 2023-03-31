import {BsPerson} from 'react-icons/bs';
import {AiOutlineRobot} from 'react-icons/ai';
import Audio from '~/components/audio.client';
interface MessageProps{
    msgOwnerUsername:string;
    voiceSrc:string;
}
export function Message(
    {
        msgOwnerUsername,
        voiceSrc
    }:MessageProps
){

    const username = "1";
    return(
        <div className={`chat ${username === msgOwnerUsername ? "chat-start":"chat-end"} `}>
            <div className="chat-image avatar ">
                <div className=" rounded-full">
                    {
                        username === msgOwnerUsername ? 
                        <BsPerson size={45} className="fill-secondary"/> 
                        : 
                        <AiOutlineRobot size={45} className="fill-secondary"/>
                    }
                </div>    
            </div>
            <div className='chat-header font-mono text-xl text-secondary'>
            {username === msgOwnerUsername?"You":"ChatGPT"}
            </div>  
            <div className='chat-bubble  bg-secondary text-primary'>
                <Audio src={voiceSrc}/>
            </div>        
        </div>
    )
}
