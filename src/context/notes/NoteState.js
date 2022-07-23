import React from 'react'
import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) =>{
  const notes = [
    {
      "_id": "1",
      "user": "62ccf79c636fe2deda8dc796",
      "title": "ReactJS",
      "description": "It is used for building Apps",
      "tag": "Learning",
      "date": "2022-07-13T05:27:44.492Z",
      "__v": 0
    },
    {
      "_id": "2",
      "user": "62ccf79c636fe2deda8dc796",
      "title": "Python",
      "description": "It is used for Data science",
      "tag": "Learning",
      "date": "2022-07-18T14:26:15.826Z", 
      "__v": 0
    },
    {
      "_id": "3",
      "user": "62ccf79c636fe2deda8dc796",
      "title": "SQL Language",
      "description": "It is used for Data Query",
      "tag": "Learning",
      "date": "2022-07-18T14:27:01.715Z",
      "__v": 0
    },
    {
      "_id": "4",
      "user": "62ccf79c636fe2deda8dc796",
      "title": "Python",
      "description": "It is used for Data science",
      "tag": "Learning",
      "date": "2022-07-18T14:26:15.826Z", 
      "__v": 0
    },
    {
      "_id": "5",
      "user": "62ccf79c636fe2deda8dc796",
      "title": "SQL Language",
      "description": "It is used for Data Query",
      "tag": "Learning",
      "date": "2022-07-18T14:27:01.715Z",
      "__v": 0
    }]
    const [note, setNotes] = useState(notes);
    // Add a Note
    const addNote = (title, description, tag)=>{
      console.log("Adding data ")
      let noteData = {
        "_id": "6",
      "user": "62ccf79c636fe2deda8dc796",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-07-18T14:27:01.715Z",
      "__v": 0
      }
      // TODO: APi call
      // let noteData = {
      //   "_id": "62d56db55614326fc5294b94",
      //   "user": "62ccf79c636fe2deda8dc796",
      //   "title": "SQL Language",
      //   "description": "It is used for Data Query AddedeOne",
      //   "tag": "Learning",
      //   "date": "2022-07-18T14:27:01.715Z",
      //   "__v": 0
      // }
      setNotes(note.concat(noteData));
    }
    // Delete a Note
   const deleteNote = (idOfNote)=>{
      // TODO: APi call
   let  newNotes = note.filter((noteObj)=> noteObj._id !== idOfNote)
          setNotes(newNotes);
    }
    // Edit a Note
    const editNote = (id, title, description, tag)=>{
            // TODO: APi call
      for (let index = 0; index < note.length; index++) {
        let element = note[index];
        if(element._id === id){
          element.title= title;
          element.title= description;
          element.title= tag;
        }
        
      }
    }
    return (
        <NoteContext.Provider value = {{note,setNotes, addNote, deleteNote, editNote}}>
                {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
