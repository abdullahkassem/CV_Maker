import ResName_Title from './ResName_Title.jsx'
import ResContentSect from './ResContentSect.jsx'
import ResParagraph from './ResParagraph.jsx'
import ExperSect from './ExperSect.jsx'
import RefernceSect from './RefernceSect.jsx'

export default function ResContent()
{
    return(
        <div className="resContent">
            <ResName_Title title='Computer Science Masters Student' firstName="Todd" lastName= "Stewart" />
            <ResParagraph text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat. Mauris convallis, mi at mattis malesuada, neque nulla volutpat dolor, hendrerit faucibus eros nibh ut nunc.'/>
            <ExperSect /> 
            <RefernceSect />
        </div>
    )
}