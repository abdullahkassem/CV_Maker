import React from 'react'
import HeaderButton from '../components/HeaderButton.jsx'
import '../styles/header.css'
import { useContext,useState } from 'react';
import { EditContext } from './EditContext.jsx';

function Header (props){
  
  const edit = props.editState;
  const [editButText,seteditButText] = useState('Preview');
  const editHandler =()=>{
    // console.log("edit value: "+edit.edit);
    if(edit.edit == '1')
    {
      seteditButText( 'Edit');
      edit.setEdit('0')
    }else if(edit.edit == '0')
    {
      seteditButText( 'Preview');
      edit.setEdit('1')
    }
  }

  
  return (
    <div className='header'>
        <h2 className='header_text'>Create your resume by entering your details below</h2>
        <div className="HButtonContainer">
            <HeaderButton text = 'Reset'/>
            <HeaderButton text = {editButText} handleClick={editHandler}/>
            <HeaderButton text = 'Print'/>
        </div>
        
        
    </div>
  )
  
}

export default Header;
