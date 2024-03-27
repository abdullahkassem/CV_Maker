import '../styles/ResParagraph.css'
import React, { useRef } from 'react';

export default function ResParagraph(params){
        
    return(
        <p className="ResParagraph">
            {params.text}
        </p>
    )
}