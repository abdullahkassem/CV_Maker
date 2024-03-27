import '../styles/ResContentSect.css'
import React, { useEffect, useState } from "react";

export default function(props){
    
    

    return(
        <div className="ResContentSect">
            <h2 className="SideSectionTitleHeading">
                {props.SectName}
            </h2>
            <hr id='contentHR'/>
            
        </div>
    )
}