import React from 'react'
import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) =>{
    const s1 = {
        "name":"sanjeev", "class":"6a"
    }

    const [state, setstate] = useState(s1);
    const update = ()=>{
        setTimeout(() => {
            setstate({"name": "Sanjeev", "class": "7a"})
        }, 1000);
    }
    return (
        <NoteContext.Provider value = {{state,update}}>
                {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
