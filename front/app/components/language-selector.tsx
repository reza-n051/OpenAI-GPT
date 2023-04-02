import {langs} from '~/language-util';
interface LSProps{
    lang:string;
    setLang:any;
}
export default function LanguageSelector({lang,setLang}:LSProps){
    return(
        <div className="dropdown dropdown-end text-secondary">
            <label className="btn btn-primary m-1 w-12" tabIndex={0}>{lang}</label>
            <ul tabIndex={0} 
                className="msg-container dropdown-content menu shadow bg-primary rounded-sm w-20 min-[358px]:w-28 h-40 overflow-y-auto overflow-x-hidden flex flex-row scrol"
            >
                {
                    langs.map(l=>
                    <li key={l.iso} onClick={()=>setLang(l.iso)}>
                        <a>{l.text}</a>
                    </li>)
                }
            </ul>
        </div>
    )
}