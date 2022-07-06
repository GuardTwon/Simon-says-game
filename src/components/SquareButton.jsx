import React from 'react'

export const SquareButton = ({color, value}) => {

  const clgValue =()=>{
   console.log(value);
  }
  return (
    <button 
          onClick={ clgValue}
          className={`${color} m-px border-2 border-black rounded-md opacity-75`}
          
        ></button>
  )
}
