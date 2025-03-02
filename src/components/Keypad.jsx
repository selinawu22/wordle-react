import React from 'react'
import KeypadRow from './KeypadRow';

function Keypad({keyColor, setWord}) {
    const firstRowKeys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const secondRowKeys = ['A', 'S', 'D', 'F', 'J', 'K', 'L'];
    const thirdRowKeys = ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Delete'];

  return (
    <div id='keypad' className='flex-center'>
        <KeypadRow keyColor={keyColor} setWord={setWord} row={firstRowKeys}/>
        <KeypadRow keyColor={keyColor} setWord={setWord} row={secondRowKeys}/>
        <KeypadRow keyColor={keyColor} setWord={setWord} row={thirdRowKeys}/>
    </div>
  )
}

export default Keypad