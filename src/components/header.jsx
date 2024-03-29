import React from 'react'
import HeaderButton from '../components/HeaderButton.jsx'
import '../styles/header.css'
import { useContext } from 'react';
import { EditContext } from './EditContext.jsx';

function Header (props){
  // const edit = useContext(EditContext);
  const edit = props.editState;
  const editHandler =()=>{
    
    if(edit.edit == '1')
    {
      // console.log("edit value is 1");
      edit.setEdit('0')
    }else if(edit.edit == '0')
    {
      // console.log("edit value is 0");
      edit.setEdit('1')
    }
  }

  
  return (
    <div className='header'>
        <h2 className='header_text'>Create your resume by entering your details below</h2>
        <div className="HButtonContainer">
            <HeaderButton text = 'Reset'/>
            <HeaderButton text = 'Edit' handleClick={editHandler}/>
            <HeaderButton text = 'Save'/>
        </div>
        
        
    </div>
  )
  
}

export default Header;
