import React from 'react'
import './style.css'

function Input(props) {
  return (
    <input {...props} className={'input ' + props.className}>
        {props.children}
    </input>
  )
}

export default Input