import React from 'react'
import HeaderButton from '../components/HeaderButton.jsx'
import '../styles/header.css'

function Header (){
  return (
    <div className='header'>
        <h2 className='header_text'>Create your resume by entering your details below</h2>
        <div className="HButtonContainer">
            <HeaderButton text = 'Reset'/>
            <HeaderButton text = 'Save'/>
        </div>
        
        
    </div>
  )
  
}

export default Header;
