import React from 'react'
import logo from './assets/guess.png'

function Logo({height}) {
  return (
    <div>
        <img id='guessLogo' src={logo} alt="Guess" style={{height: height}}/>
    </div>
  )
}

export default Logo