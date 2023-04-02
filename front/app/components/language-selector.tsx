const langs = [
    {iso:"fa",text:"persian"},
    {iso:"en",text:"english"},
    {iso:"ar",text:"arabic"},
    {iso:"af",text:"african"},
    {iso:"bs",text:"bosnian"},
    {iso:"ca",text:"catalan"},
    {iso:"cs",text:"Czech"},
    {iso:"cy",text:"Welsh"},
    {iso:"da",text:"danish"},
    {iso:"dr",text:"germany"},
    {iso:"et",text:"estonian"},
    {iso:"es",text:"spanish"},
    {iso:"el",text:"greek"},
    {iso:"fi",text:"finnish"},
    {iso:"fr",text:"french"},
    {iso:"hi",text:"hindi"},
    {iso:"hu",text:"hungarian"},
    {iso:"hy",text:"armanian"},
    {iso:"it",text:"italian"},
    {iso:"id",text:"indonesian"},
    {iso:"ja",text:"japanese"},
    {iso:"kn",text:"kannada"},
    {iso:"ko",text:"korean"},
    {iso:"pl",text:"polish"},
    {iso:"pt",text:"portuguese"},
    {iso:"la",text:"latin"},
    {iso:"lv",text:"latvian"},
    {iso:"ml",text:"malay"},
    {iso:"mk",text:"makedonain"},
    {iso:"mr",text:"marathi"},
    {iso:"ne",text:"nepali"},
    {iso:"nl",text:"dutch"},
    {iso:"no",text:"norwegian"},
    {iso:"ru",text:"russian"},
    {iso:"ro",text:"romanian"},
    {iso:"tr",text:"turkish"},
    {iso:"sr",text:"serbian"},
    {iso:"sk",text:"slovak"},
    {iso:"sv",text:"swedish"},
    {iso:"ur",text:"urdu"},
    {iso:"zh",text:"chinese"}
]

interface LSProps{
    lang:string;
    setLang:any;
}
export default function LanguageSelector({lang,setLang}:LSProps){
    return(
        <div className="dropdown text-secondary">
            <label className="btn btn-primary m-1 w-20 min-[358px]:w-28" tabIndex={0}>{lang}</label>
            <ul tabIndex={0} 
                className="msg-container dropdown-content menu shadow bg-primary rounded-sm w-20 min-[358px]:w-28 h-40 overflow-y-auto overflow-x-hidden flex flex-row scrol"
            >
                {
                    langs.map(l=>
                    <li key={l.iso} onClick={()=>setLang(l.text)}>
                        <a>{l.text}</a>
                    </li>)
                }
            </ul>
        </div>
    )
}