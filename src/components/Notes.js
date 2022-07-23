import React,{ useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';

export default function Notes() {
    const contextStore = useContext(noteContext);
    const {note, addNote } = contextStore;
  return (
      <>
      <AddNote />
          <div className="row my-3">
              <h2>Your Notes</h2>   
          {note.map((item) => {
              return <NoteItem item={item} key = {item._id} addNote = {addNote} />
          })}
      </div>
      </>
  )
}
