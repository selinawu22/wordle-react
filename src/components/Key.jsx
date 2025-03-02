import React from 'react'

function Key({k, onClick, color}) {
  const colorMap = new Map([
    ['blue', '#a9b5df'],
    ['grey', '#4b506b8e'],
    ['yellow', '#f8fbab'],
    ['green', '#d4edd5'],
  ]);

  return (
    <div onClick={onClick} style={{backgroundColor: colorMap.get(color)}} className='key flex-center'><p>{k}</p></div>
  )
}

export default Key