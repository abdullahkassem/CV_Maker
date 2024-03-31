import '../styles/Sidesub.css'
import { useState, useId, useContext } from 'react';
import { EditContext } from './EditContext';

function Sidesub(props) {
    const [value, setValue] = useState(props.detail);
    const edit = useContext(EditContext);

    function changeHandle(event) {
        setValue(event.target.value);
    }
    return (
        <div className="Sidesub">
            <h3 >{props.head}</h3>

            {(edit.edit == '1') ? (<input type="text" name={props.head} onChange={changeHandle} value={value} />) : (<h4 >{value}</h4>)}

        </div>
    )
}




export default Sidesub;