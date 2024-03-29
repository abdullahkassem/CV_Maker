import '../styles/Resume.css'
import ResumeSideBar from './ResumeSideBar.jsx'
import ResContent from './ResContent.jsx'



function Resume(){

    return(
        <form action="">
            <div className="resumeContainer">
                <ResumeSideBar />
                <ResContent/>   
            </div>
        </form>
    )
}

export default Resume;