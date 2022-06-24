import React from 'react'

export const SquareButton = ({color, value}) => {
  return (
    <button
          onClick={() => console.log(value)}
          className={`${color} m-px border-2 border-black rounded-md `}
          
        ></button>
  )
}
