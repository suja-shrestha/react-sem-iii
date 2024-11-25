import React from 'react'
import './button.css'

const button = (props) => {
  return (
    <div>
      <button>{props.hello}</button>
      <p>{props.text}</p>
    </div>
  )
}

export default button
