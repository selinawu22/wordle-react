import React from 'react'
import WordRow from './WordRow'
import WordRowEmpty from './WordRowEmpty'

function WordGrid({wordGrid, wordOfTheDay, attempt}) {
  return (
    <div className='wordGrid'>
      {wordGrid.map((w, ind) => 
        ind < attempt ?
          <WordRow key={ind} wordRow={w} wordOfTheDay={wordOfTheDay}/> :
        ind === attempt ?
          <WordRow key={ind} wordRow={w} id='currWordRow'/> :
        <WordRowEmpty key={ind}/>
      )}
    </div>
  )
}

export default WordGrid