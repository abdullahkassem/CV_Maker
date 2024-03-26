import SideSectionTitle from './SideSectionTitle.jsx'
import '../styles/LanguageSect.css'

export default function LanguageSect(){
    let langArray = ['English', 'French'];

    return(
        <div className="contactSect">
            <SideSectionTitle name='Languages'/>
            <div className="langList">
                {langArray.map((lang)=>{
                    return(
                        <p key={lang}>{lang}</p>
                    )
                })}
            </div>
        </div>
    )
}