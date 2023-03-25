const langs = [
    "fa","en","lv","af","cs",
    "kn","ar","ja","hu","hi",
    "ko","la","cy","da","ml",
    "bs","nl","ne","mr","ru",
    "ca","et","fi","sr","it",
    "ur","tr","id","hy","no",
    "pl","fr","pt","sk","dr",
    "zh","sv","es","mk","el",
];
interface LSProps{
    lang:string;
    setLang:any;
}
export default function LanguageSelector({lang,setLang}:LSProps){
    return(
        <div className="dropdown text-secondary">
            <label className="btn btn-primary m-1" tabIndex={0}>{lang}</label>
            <ul tabIndex={0} 
                className="msg-container dropdown-content menu shadow bg-primary rounded-sm w-16 h-40 overflow-y-auto overflow-x-hidden flex flex-row scrol"
            >
                {
                    langs.map(l=>
                    <li key={l} onClick={()=>setLang(l)}>
                        <a>{l}</a>
                    </li>)
                }
            </ul>
        </div>
    )
}