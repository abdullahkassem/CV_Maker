import ProfileImg from './ProfileImg.jsx'
import ContactSection from './ContactSection.jsx'
import profileImgPath from '../assets/resPP.webp'
import EductationSect from './EductationSect.jsx'
import SkillSect from './SkillSect.jsx'
import LanguageSect from './LanguageSect.jsx'


export default function ResumeSideBar()
{
    return(
            <div className="resSidebar">
                <ProfileImg src={profileImgPath} />
                <ContactSection/>
                <EductationSect />
                <SkillSect />
                <LanguageSect />
            </div>
    )
}
