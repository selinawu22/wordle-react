import React from 'react'
import KeyButton from '../KeyButton'
import HomePage from './HomePage'
import GamePage from './GamePage';
import Logo from '../Logo';

function InstructionPage({setPageState}) {
  const playGame = () => setPageState(<GamePage setPageState={setPageState} />);

  return (
    <div className='page'>
      <Logo height='15rem'/>
      <div className='popupBox'>
        <KeyButton id='exitInstructionButton' text='X' onClick={() => setPageState(<HomePage setPageState={setPageState}/>)}/>
        <h1>Instruction Page</h1>
        <ul>
          <li>Each guess must be a valid five-letter word.</li>
          <li>The color of a tile will change to show you how close your guess was.</li>
          <li>If the tile turns green, the letter is in the word, and it is in the correct spot.</li>
          <li>If the tile turns yellow, the letter is in the word, but it is not in the correct spot.</li>
          <li>If the tile turns gray, the letter is not in the word.</li>
        </ul>
        <div className='flex-center'>
          <KeyButton className='playButton' text='Play' onClick={playGame}/>
        </div>
      </div>
    </div>
  )
}

export default InstructionPage