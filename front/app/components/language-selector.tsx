const langs = [
    "fa","en",
    "ar","af",
    "bs",
    "ca","cs","cy",
    "da","dr",
    "el","et","es",
    "fi","fr",
    "hy","hu","hi",
    "it","id",
    "kn","ko","ja",
    "la","lv",
    "ml","mr","mk",
    "nl","ne","no",
    "ru","ro",
    "sr","sk","sv",
    "tr",
    "pl","pt",
    "ur",
    "zh",
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