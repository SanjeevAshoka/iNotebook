import React from 'react'
import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) =>{
  const host = "http://localhost:8000"
  const notes =[];
  const [note, setNotes] = useState(notes);
    // Get All Note
    const getAllNote =async  ()=>{
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'auth-tocken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjY2Y3OWM2MzZmZTJkZWRhOGRjNzk2In0sImlhdCI6MTY1NzY4NzY3N30.ZMCtrIfsHEyZWKbdsgaLe9EUQsg0VlyFYuMGciH3fZ8'
        },
      });
      const json = await response.json();
      console.log(json);
      setNotes(json);
      }
     
      
     
    // Add a Note
    const addNote =async  (title, description, tag)=>{
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-tocken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjY2Y3OWM2MzZmZTJkZWRhOGRjNzk2In0sImlhdCI6MTY1NzY4NzY3N30.ZMCtrIfsHEyZWKbdsgaLe9EUQsg0VlyFYuMGciH3fZ8'
        },
        body: JSON.stringify({title, description, tag})
      });
      const json = await response.json();
      let noteData = json
      setNotes(note.concat(noteData));
    }
    // Delete a Note
   const deleteNote = async (id)=>{
    console.log("id=",id);
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-tocken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjY2Y3OWM2MzZmZTJkZWRhOGRjNzk2In0sImlhdCI6MTY1NzY4NzY3N30.ZMCtrIfsHEyZWKbdsgaLe9EUQsg0VlyFYuMGciH3fZ8'
      },
    });
    // const json = await  response.json();
      getAllNote();
    }
    // Edit a Note
    const editNote =async (id, title, description, tag)=>{
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-tocken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjY2Y3OWM2MzZmZTJkZWRhOGRjNzk2In0sImlhdCI6MTY1NzY4NzY3N30.ZMCtrIfsHEyZWKbdsgaLe9EUQsg0VlyFYuMGciH3fZ8'
        },
        body: JSON.stringify({title, description, tag})
      });
      // const json =await  response.json();
      // console.log("json= ",json);
      //getAllNote();                 //We can call the backend to again fetch all notes from DB. or we can directly update in frontend

      // update in frontend
      let newNotes = JSON.parse(JSON.stringify(note));
      for (let index = 0; index < newNotes.length; index++) {
        let element = newNotes[index];
        if(element._id === id){
          newNotes[index].title= title;
          newNotes[index].description= description;
          newNotes[index].tag= tag;
          break;
        }
      }
      setNotes(newNotes);
    }
  
    return (
        <NoteContext.Provider value = {{note,setNotes, addNote, deleteNote, editNote, getAllNote}}>
                {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
