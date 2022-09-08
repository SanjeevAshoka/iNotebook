import React from 'react'
import { useState, useContext  } from 'react';
import noteContext from '../context/notes/noteContext';

export default function AddNote() {
    const context = useContext(noteContext);
    const {addNote} = context;
   const [note, setnote] = useState({title:"", description:"", tag:""});

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setnote({title:"", description:"", tag:""});
    }
    const onChange = (e)=> { 
        setnote({ ...note, [e.target.name]: e.target.value })
    }
  return (
    <div>
        <div className='container my-3'>
      <h2>Add a Note</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input value= {note.title} type="text" className="form-control" id="title" name = "title" aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" value= {note.description} className="form-control" id="description" name= "description" onChange={onChange} minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" value= {note.tag} className="form-control" id="tag" name="tag" onChange={onChange}/>
        </div>
        <button disabled= {note.title.length<4 || note.description.length<7 } type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
      </form>
    </div>
    </div>
  )
}
