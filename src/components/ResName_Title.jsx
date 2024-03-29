import { useState,useContext } from 'react';
import '../styles/ResName_Title.css'
import { EditContext } from './EditContext';

export default function ResName_Title(props){

    const [FirstName, setFirstName] = useState( props.firstName );
    const [LastName, setLastName] = useState( props.lastName );
    const [Title, setTitle] = useState( props.title );
    
    const edit = useContext(EditContext);
     

    return(
        <div className="ResName_Title">

        {(edit.edit=='1')?(
            <div>
                <label >First Name
                    <input name='firstName' type='text' value={FirstName} onChange={(e)=>setFirstName(e.target.value)} /> 
                </label>
                
                <label >Second Name
                    <input name='secondName' type='text' value={LastName} onChange={(e)=>setLastName(e.target.value)} /> 
                </label>
                
            </div> 
            ):(
            <h1 className="resName">
                <b style={{fontWeight: "bolder"}}>{FirstName}</b>{" " + LastName}
            </h1>
         )}
        
        {(edit.edit=='1')?( <input type='text' name='Title' value={Title} onChange={(e)=>setTitle(e.target.value)} />  )
         :( <h2>{Title}</h2> )}

        </div>
    )
}

