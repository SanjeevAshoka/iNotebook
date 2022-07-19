import React from 'react'

export default function NoteItem(props) {
    console.log("came");
  return (
    <div className='col-md-3 my-3'>
        <div className="card" >
              <div className="card-body">
                  <h5 className="card-title">{props.item.title }</h5>
                  <p className="card-text">{props.item.description }</p>
              </div>
          </div>
     
    </div>
  )
}
