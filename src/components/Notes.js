import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';

export default function Notes() {
    const contextStore = useContext(noteContext);
    const { note, addNote, getAllNote, editNote } = contextStore;
    useEffect(() => {
        getAllNote();
        // eslint-disable-next-line
    }, []);
    const [enote, esetnote] = useState({id:"",title:"", description:"", tag:""});
    const ref = useRef(null);
    const ref1 = useRef(null);
    const updateNote = (Note) => {
        ref.current.click();
        esetnote({id:Note._id, title:Note.title, description:Note.description, tag:Note.tag});
    }
   

    const handleClick = (e) => {
        editNote(enote.id, enote.title, enote.description, enote.tag);
        ref1.current.click();
        e.preventDefault();

        // addNote(note.title, note.description, note.tag);
    }
    const onChange = (e)=> { 
        esetnote({ ...enote, [e.target.name]: e.target.value })
    }

    return (
        <>
            <AddNote />
            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" value = {enote.title} className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" value = {enote.description}  className="form-control" id="description" name="description" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" value = {enote.tag}  className="form-control" id="tag" name="tag" onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={ref1} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h2>Your Notes</h2>
                {note.map((item) => {
                    return <NoteItem item={item} key={item._id} addNote={addNote} updateNote={updateNote} />
                })}
            </div>
        </>
    )
}
