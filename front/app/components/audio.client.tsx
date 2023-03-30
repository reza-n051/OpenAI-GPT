import {BsPlay} from 'react-icons/bs';
import {TfiControlPause} from 'react-icons/tfi';
import { useAudio } from 'react-use';
import { ClientOnly } from 'remix-utils';
export default function Audio({src}:AudioProps){
    const [audio,state,controls] = useAudio({src});
    return (
        <ClientOnly fallback={<p>loading</p>}>
        {
          () =>

            <div className="flex flex-row">
                <TimeFormat  time={state.duration}/>:<TimeFormat time={state.time}/>
            {
                state.paused ?
                <button
                onClick={()=>controls.play()}
                ><BsPlay size={25} className="fill-primary hover:fill-third"/></button>
                :
                <button
                onClick={()=>controls.pause()}
                ><TfiControlPause size={25} className="fill-primary hover:fill-third"/></button>
            }
            {audio}
            <AudioBar seek={controls.seek} time={state.time} duration={state.duration} className="mx-2 mt-[6px]"/>
            </div>
        }
        </ClientOnly>
    );
}
interface AudioProps{
    src:string;
}
function AudioBar({
    className,time,duration,seek
}:AudioBarProps){
    // useEffect(()=>{
    //     //this is a hack for fix chrome bug
    //     if(duration===Infinity){
    //         seek(15000);
    //         seek(0);
    //     }
    // },[duration,seek]);
    const handleChange = (e:any) =>{
        try{
            const valNum = parseFloat(e.target.value);
            seek(valNum/100*duration );
        }catch(e){}
    }
    return(
        <div className={`${className}`}>
            <input 
                type="range" 
                step="any"
                onChange={handleChange} 
                value={`${duration !== Infinity? time/duration*100:time/50*100}`}  
                className="range range-xs range-primary w-16 min-[335px]:w-24 min-[380px]:w-36 " 
            />
        </div>
    )
}

interface AudioBarProps{
    className?:string;
    time:number;
    duration:number;
    seek:(time:number)=>void;
}

function TimeFormat({time}:{time:number}){
    if(time === Infinity){
        return(
            <span className="pt-0.5">0:00</span>
        )
    }
    return(
        <span className="pt-0.5">
        {Math.floor(time/60)}
        :
        {Math.floor(time) - (Math.floor(time / 60)) * 60 < 10 ? 0 : ''}{Math.floor(time) - (Math.floor(time / 60)) * 60} 
        </span>

    )
}