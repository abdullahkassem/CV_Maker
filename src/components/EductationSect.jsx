import '../styles/EductationSect.css'
import '../styles/ContactSection.css'
import SideSectionTitle from './SideSectionTitle.jsx'

function EducationEntry(props)
{
    return(
        <div className="EducationEntry">
            <p>{props.sYear + ' - '+ props.eYear}</p>
            <p>{props.degree}</p>
            <p>{props.uni}</p>
        </div>
    )
}

export default function EductationSect(){
    return(
        <div className="contactSect">
            <SideSectionTitle name='Education'/>
            <EducationEntry sYear="2025" eYear='2027' degree='M.S. in Computer Science' uni='University of California' />
            <EducationEntry sYear="2019" eYear='2024' degree='B.S. in Computer Engineering' uni='University of London' />
            
        </div>
    )
}