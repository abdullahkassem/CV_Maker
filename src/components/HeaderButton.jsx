import { useState } from 'react';

function HeaderButton(props){

    return (
        <button onClick={props.handleClick} className="headerButton">{props.text}</button>
    )
}

export default HeaderButton;