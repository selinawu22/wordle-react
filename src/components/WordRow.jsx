import React, { useState } from 'react'
import LetterBox from './LetterBox'
import WordRowEmpty from './WordRowEmpty';

function WordRow({wordRow, wordOfTheDay, id}) {
  const colorMap = new Map([
    ['blue', '#a9b5df'],
    ['yellow', '#f8fbab'],
    ['green', '#d4edd5'],
  ]);

  let correctLetters = wordOfTheDay?.slice(0);

  let letterColor = (ind) => {
    if (!wordOfTheDay) {
      return 'blue';
    }
    
    if (correctLetters.includes(wordRow[ind])) {
      correctLetters = correctLetters.replace(wordRow[ind], '')
      if (wordOfTheDay[ind] === wordRow[ind]) {
        return 'green';
      } else {
        return 'yellow';
      }
    } else {
      return 'blue';
    }
  }

  return (
    <div className='wordRow' id={id}>
        {wordRow.split('').map((char, ind) => <LetterBox key={ind} letter={char} color={colorMap.get(letterColor(ind))}/>) }
    </div>
  )
}

export default WordRow