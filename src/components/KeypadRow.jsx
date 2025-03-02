import React from 'react'
import Key from './Key'
import KeyButton from './KeyButton';

function KeypadRow({keyColor, setWord, row}) {

  let backColor = (k) => {
    return keyColor[k] || 'blue';
  }

  return (
    <div className='keypadRow flex-center'>
        {row.map((k) => (k.length === 1 ? 
        <Key key={k} k={k} onClick={() => setWord(k)} color={backColor(k)}/> : 
        <KeyButton className='keyButton' onClick={() => setWord(k)} key={k} text={k}/>))}
    </div>
  )
}

export default KeypadRow  