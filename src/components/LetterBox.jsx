import React from 'react'

function LetterBox({letter, color}) {
  return (
    <div className='letterBox flex-center' style={{backgroundColor: color}}><p>{letter}</p></div>
  )
}

export default LetterBox