import ResParagraph from "./ResParagraph"
import { useState } from "react";
import Editable from "./Editable";

export default function(props){

    const [StartYear, setStartYear] = useState( props.startYear );
    const [EndYear, setEndYear] = useState( props.endYear );
    const [compName, setcompName] = useState(props.compName  );          
    const [compAddr, setcompAddr] = useState(props.compAddr  );
     
    

    return(
        <div className="ExperSectEntry">
            <Editable 
            editTrueFunc={()=>( <div>
                <label >Start Year</label>
                <input type='text'  value={StartYear} onChange={(e)=>setStartYear(e.target.value)} /> 
                <label >End Year</label>
                <input type='text'  value={EndYear} onChange={(e)=>setEndYear(e.target.value)} /> 
            </div>
            )}
            editFalseFunc={()=>( <h3 className="workDuration">{StartYear +' - '+EndYear}</h3>)}
            />
            
            <Editable 
            editTrueFunc={()=>( <div>
                <label >Company Name</label>
                <input type='text'  value={compName} onChange={(e)=>setcompName(e.target.value)} /> 
                <label>Company Address</label>
                <input type='text'  value={compAddr} onChange={(e)=>setcompAddr(e.target.value)} /> 
                </div>
            )}
            editFalseFunc={()=>(<h3 className="compInfo">{compName +' | '+compAddr}</h3>  )}
            />
            <h2 className="jobPos">{props.jobPos}</h2>
            <ResParagraph text={props.description} />
        </div>
    )
}