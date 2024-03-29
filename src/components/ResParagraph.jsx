import '../styles/ResParagraph.css'
import React, { useState,useId,useContext } from 'react';
import { EditContext } from './EditContext';


export default function ResParagraph(params){
    const [IntroPara, setIntroPara] = useState( params.text );
    const introParaID = useId();

    const edit = useContext(EditContext);


    return(

        <>{ 
            (edit.edit=='1')?
            (<textarea type='text' name ={'introPara'+introParaID} value={IntroPara} onChange={(e)=>setIntroPara(e.target.value)} /> )
            :(<p className="ResParagraph">
            {IntroPara}
            </p>)
        }
        </>
    )
}