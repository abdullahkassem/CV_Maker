import '../styles/RefernceSect.css'
import RefernceSectEntry from './RefernceSectEntry.jsx'
import ResContentSect from './ResContentSect.jsx'

export default function(){
    return(
        <div className="RefernceSect">
            <ResContentSect SectName='Reference'/>
            <div className="ReferEntriesContainer">
                <RefernceSectEntry name='Name Surname' jobPos='Job Position' cmpName='Company Name' phone='123-456-789' email='myemail@gmail.com'/>
                <RefernceSectEntry name='Name Surname' jobPos='Job Position' cmpName='Company Name' phone='123-456-789' email='myemail@gmail.com'/>
            </div>
        </div>
    )
}