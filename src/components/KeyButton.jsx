import React from 'react'

function KeyButton({id, text, color, onClick}) {
  return (
    <button id={id} onClick={onClick} className='keyButton flex-center' style={{backgroundColor: color}}>{text}</button>
  )
}


export default KeyButton