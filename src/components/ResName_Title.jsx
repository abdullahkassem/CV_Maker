import { useState } from 'react';
import Editable from './Editable';
import '../styles/ResName_Title.css'

export default function ResName_Title(props){

    const [FirstName, setFirstName] = useState( props.firstName );
    const [LastName, setLastName] = useState( props.lastName );
    const [Title, setTitle] = useState( props.title );
     
     

    return(
        <div className="ResName_Title">

            <Editable 
            
            editTrueFunc={()=>( 
            <div>
                <label >First Name</label>
                <input type='text' value={FirstName} onChange={(e)=>setFirstName(e.target.value)} /> 
                <label >Second Name</label>
                <input type='text' value={LastName} onChange={(e)=>setLastName(e.target.value)} /> 
            </div> 
            )}
            
            editFalseFunc={()=>(
            <h1 className="resName">
                <b style={{fontWeight: "bolder"}}>{props.firstName}</b>{" " + props.lastName}
            </h1>
         )}
            />

            
            <Editable 
            editTrueFunc={()=>( <input type='text' value={Title} onChange={(e)=>setTitle(e.target.value)} />  )}
            editFalseFunc={()=>( <h2>{props.title}</h2> )}
            />
        </div>
    )
}

