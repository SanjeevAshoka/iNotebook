import React, { useContext } from 'react';
import { useEffect } from 'react';
import noteContext from '../context/notes/noteContext';

export default function About() {
  const a = useContext(noteContext);
useEffect(()=>{
    a.update();
    // eslint-disable-next-line
}, [] ); 

  return (
    <div>
      this is about {a.state.name} and he is in class {a.state.class}
    </div>
  )
}
