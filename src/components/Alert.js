import React from 'react'

export default function Alert(props) {
  return (
    <div>
          <div className={`alert alert-${props.type}`} role="alert">
              {props.message}
          </div>
    </div>
  )
}
