import '../styles/Sidesub.css'

import { useState } from 'react';
import Editable from './Editable';


function Sidesub(props){
    const [value, setValue] = useState(props.detail);

    function changeHandle(event){
        setValue(event.target.value);
    }
    return(
        <div className="Sidesub">
            <h3 >{props.head}</h3>

            <Editable 
            editTrueFunc={()=>(<input type="text" onChange={changeHandle} value={value}/>)} 
            editFalseFunc={()=>(<h4 >{value}</h4>)}
            />
            
        </div>
    )
}




export default Sidesub;