import React from 'react'
import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) =>{
  const notes = [
    {
      "_id": "62ce57d088716e4c29a26d07",
      "user": "62ccf79c636fe2deda8dc796",
      "title": "ReactJS",
      "description": "It is used for building Apps",
      "tag": "Learning",
      "date": "2022-07-13T05:27:44.492Z",
      "__v": 0
    },
    {
      "_id": "62d56d875614326fc5294b92",
      "user": "62ccf79c636fe2deda8dc796",
      "title": "Python",
      "description": "It is used for Data science",
      "tag": "Learning",
      "date": "2022-07-18T14:26:15.826Z", 
      "__v": 0
    },
    {
      "_id": "62d56db55614326fc5294b94",
      "user": "62ccf79c636fe2deda8dc796",
      "title": "SQL Language",
      "description": "It is used for Data Query",
      "tag": "Learning",
      "date": "2022-07-18T14:27:01.715Z",
      "__v": 0
    },
    {
      "_id": "62d56d875614326fc5294b92",
      "user": "62ccf79c636fe2deda8dc796",
      "title": "Python",
      "description": "It is used for Data science",
      "tag": "Learning",
      "date": "2022-07-18T14:26:15.826Z", 
      "__v": 0
    },
    {
      "_id": "62d56db55614326fc5294b94",
      "user": "62ccf79c636fe2deda8dc796",
      "title": "SQL Language",
      "description": "It is used for Data Query",
      "tag": "Learning",
      "date": "2022-07-18T14:27:01.715Z",
      "__v": 0
    }]
    const [note, setNotes] = useState(notes);
    return (
        <NoteContext.Provider value = {{note,setNotes}}>
                {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
