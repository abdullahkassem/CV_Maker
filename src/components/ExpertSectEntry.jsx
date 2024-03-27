import ResParagraph from "./ResParagraph"

export default function(props){
    return(
        <div className="ExperSectEntry">
            <h3 className="workDuration">{props.startYear +' - '+props.endYear}</h3>
            <h3 className="compInfo">{props.compName +' | '+props.compAddr}</h3>
            <h2 className="jobPos">{props.jobPos}</h2>
            <ResParagraph text={props.description} />
        </div>
    )
}