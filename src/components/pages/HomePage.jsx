import React from 'react'
import KeyButton from '../KeyButton'
import GamePage from './GamePage';
import InstructionPage from './InstructionPage';
import LoginPage from './LoginPage';
import Logo from '../Logo';

function HomePage({setPageState}) {
    const showInstructions = () => setPageState(<InstructionPage setPageState={setPageState} />);
    const playGame = () => setPageState(<GamePage setPageState={setPageState} />);
    const login = () => setPageState(<LoginPage setPageState={setPageState} />);
    
    return (
    <div className='page' id='homePage'>
      <Logo />
      <div className='homepageButtons flex-center'>
        <KeyButton id='loginButton' text='Log in' onClick={login}/>
        <KeyButton id='instructionButton' text='Instructions' onClick={showInstructions}/>
        <KeyButton className='playButton' text='Play' onClick={playGame}/>
      </div>
    </div>
  )
}

export default HomePage