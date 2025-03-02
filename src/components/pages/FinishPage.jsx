import React from 'react'
import KeyButton from '../KeyButton'
import GamePage from './GamePage'
import HomePage from './HomePage'

function FinishPage({setPageState, text}) {
  return (
    <div className='page'>
        <p>{text}</p>
        <KeyButton text='Play again' onClick={() => setPageState(<GamePage setPageState={setPageState}/>)}/>
        <KeyButton text='Return Home' onClick={() => setPageState(<HomePage setPageState={setPageState} />)}/>
    </div>
  )
}

export default FinishPage