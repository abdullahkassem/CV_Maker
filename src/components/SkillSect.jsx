import SideSectionTitle from './SideSectionTitle.jsx'
import '../styles/SkillSect.css'

export default function SkillSect(props){
    let skillArray = ['C++','Java','MySql','Web Development','Mobile Development'];
    return(
        <div className="contactSect">
            <SideSectionTitle name='Skills'/>
            <ul className="skillList">
                {skillArray.map(skill => {
                    return(
                        <li key={skill}>{skill}</li>
                    )
                })}
            </ul>
        </div>
    )
}