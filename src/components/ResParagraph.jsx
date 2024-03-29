import '../styles/ResParagraph.css'
import React, { useState } from 'react';
import Editable from './Editable.jsx'

export default function ResParagraph(params){
    const [IntroPara, setIntroPara] = useState( params.text );
             
    return(
        

        <Editable 
        editTrueFunc={()=>( <textarea type='text'  value={IntroPara} onChange={(e)=>setIntroPara(e.target.value)} /> )}
        
        editFalseFunc={()=>( 
        <p className="ResParagraph">
            {IntroPara}
        </p>)}
        />
    )
}