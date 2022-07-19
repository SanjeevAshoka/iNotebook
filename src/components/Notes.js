import React,{ useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';

export default function Notes() {
    const contextStore = useContext(noteContext);
  return (
      
          <div className="row my-3">
              <h2>Your Notes</h2>   
          {contextStore.note.map((item,key) => {
              return <NoteItem item={item} key = {key} />
          })}
      </div>
  )
}
