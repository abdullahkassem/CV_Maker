// This compnent takes two functions that return components, 
// and returns the appropriate one based on the edit context value.

import { EditContext } from './EditContext';
import { useContext,useState } from 'react';

export default function(props){
    const edit = useContext(EditContext);
    const Ret = (edit.edit =='1') ? props.editTrueFunc : props.editFalseFunc;

    return(
        <Ret/>
    )
}