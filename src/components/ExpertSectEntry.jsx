import ResParagraph from "./ResParagraph"
import { useState,useId,useContext } from 'react';
import { EditContext } from './EditContext';



export default function(props){

    const [StartYear, setStartYear] = useState( props.startYear );
    const [EndYear, setEndYear] = useState( props.endYear );
    const [compName, setcompName] = useState(props.compName  );          
    const [compAddr, setcompAddr] = useState(props.compAddr  );
    const [pos, setPos] = useState(props.jobPos);
     
    const sYearID = useId();
    const eYearID = useId();
    const cmpNameID = useId();
    const cmpAddrID = useId();
    const posID = useId();
    
    const edit = useContext(EditContext);

    return(
        <div className="ExperSectEntry">
            {(edit.edit=='1')?( 
                <div>
                    <label >Start Year
                        <input type='text' name={'sYear'+sYearID} value={StartYear} onChange={(e)=>setStartYear(e.target.value)} /> 
                    </label>
                    
                    <label >End Year
                        <input type='text'  name={'eYear'+eYearID} value={EndYear} onChange={(e)=>setEndYear(e.target.value)} /> 
                    </label>    
                </div>
            ):( <h3 className="workDuration">{StartYear +' - '+EndYear}</h3>)}

            {(edit.edit=='1')?(
                <div>
                    <label >Company Name
                        <input type='text' name={'compName'+cmpNameID} value={compName} onChange={(e)=>setcompName(e.target.value)} /> 
                    </label>
                    
                    <label>Company Address
                        <input type='text' name={'compAddr'+cmpAddrID} value={compAddr} onChange={(e)=>setcompAddr(e.target.value)} /> 
                    </label>
                </div>
            ):(<h3 className="compInfo">{compName +' | '+compAddr}</h3>  )}
                
            {(edit.edit=='1')?(<input type="text" name={"pos"+posID} value={pos} onChange={(e)=>setPos(e.target.value)}/>)
            :( <h2 className="jobPos">{pos}</h2>  )}

            <ResParagraph text={props.description} />

        </div>
    )
}