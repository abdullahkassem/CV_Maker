import '../styles/Resume.css'
import ResumeSideBar from './ResumeSideBar.jsx'
import ResContent from './ResContent.jsx'



function Resume(){

    return(
        <div className="resumeContainer">
            <ResumeSideBar />
            <ResContent/>
        </div>
    )
}

export default Resume;