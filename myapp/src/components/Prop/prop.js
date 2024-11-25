import React from 'react'
import './prop.css'

const prop = (props) => {
  return (
    <div className='div1'>
      <h1>{props.sujal}</h1>
      <p>{props.texts}</p>
      <h2>{props.text1}</h2>
    </div>
  )
}

export default prop;
