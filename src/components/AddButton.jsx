import { useState } from "react";
import "../styles/AddButton.css";

export default function (props) {

    const [CurrItem,setCurrItem] = useState("");
    
    function addToStateArray(item){
        props.myState[1]([...props.myState[0],item]);
        setCurrItem("");
    }

    return (
        <div className="AddButtonContainer">
            <input type="text" placeholder="write items here" value={CurrItem} onChange={(e)=>setCurrItem(e.target.value)}/>
            <button type="button" onClick={(e)=>addToStateArray(CurrItem)}>Add</button>
        </div>
    );
}
