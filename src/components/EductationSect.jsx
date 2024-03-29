import '../styles/EductationSect.css'
import '../styles/ContactSection.css'
import SideSectionTitle from './SideSectionTitle.jsx'
import Editable from './Editable';
import { useState } from 'react';

function EducationEntry(props)
{
    const [duration, setDuration] = useState(props.sYear + ' - '+ props.eYear);
    const [degree, setdegree] = useState( props.degree );
    const [uni, setuni] = useState( props.uni );
   
   
   


    return(
        <div className="EducationEntry">
            <Editable 
            editTrueFunc={()=>( <input type='text' value={duration} onChange={(e)=>setDuration(e.target.value)} /> )}
            editFalseFunc={()=>( <p>{duration}</p> )}
            />
            
            <Editable 
            editTrueFunc={()=>( <input type='text' value={degree} onChange={(e)=>setdegree(e.target.value)} /> )}
            editFalseFunc={()=> ( <p>{degree}</p> )}
            />
            
            
            <Editable 
            editTrueFunc={()=>(  <input type='text' value={uni} onChange={(e)=>setuni(e.target.value)} />  )}
            editFalseFunc={()=>( <p>{uni}</p>)}
            />
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