import React,{useContext} from 'react';
import {FaCalendar} from 'react-icons/fa';
import { FiEdit } from "react-icons/fi";
import noteContext from '../context/notes/noteContext';

export default function NoteItem(props) {
     const contextForDel = useContext(noteContext);
     const { deleteNote , editNote} = contextForDel;
  return (
    <div className='col-md-3 my-3'>
        <div className="card" >
              <div className="card-body">
              <div style={{display:'flex'}}>
                  <h5 className="card-title">{props.item.title }</h5>
                  <div style={{ marginLeft:'120px', cursor: 'pointer'}} ><FaCalendar onClick={()=>deleteNote(props.item._id)}/></div> 
                  <div style={{ marginLeft:'30px', cursor: 'pointer'}}><FiEdit onClick={()=>editNote(props.item._id)}/></div>
                </div>
                  <p className="card-text">{props.item.description }</p>
                 
                  {/* <div className="row my-3"> */}
                 {/* <div style={{display:'flex'}}>
                  <div ><FaCalendar/></div> 
                  <div style={{ marginLeft:'30px', cursor: 'pointer'}}><FiEdit /></div>
                  </div> */}

              </div>
          </div>
     
    </div>
  )
}
