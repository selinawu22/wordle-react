import React from 'react'
import LetterBox from './LetterBox'

function WordRowEmpty() {
    return (
        <div className='wordRow'>
            {Array(5).fill('').map((c, ind) => <LetterBox key={ind} letter={' '}/>)}
        </div>
    )
}

export default WordRowEmpty