import React from 'react'
import { useContext } from "react";
import { Context } from '../context/Context';


export const StarButton = () => {
  const {squareLighting} = useContext(Context)
  
return (
    <div>
        <button className=' m-px border-2 border-black mt-6 mr-auto ml-auto rounded-md grid justify-items-center '
            onClick={()=>squareLighting()}
        >     Start Game
        </button>
    </div>
  )
}
