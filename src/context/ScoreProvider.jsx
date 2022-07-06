import { useEffect, useState } from "react"
import { SquareButton } from "../components/SquareButton";
import { Context } from "./Context"

export const ScoreProvider = ({children}) => {

const [score, setScore] = useState(0)

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const randomNumber =()=>getRandomArbitrary(1,9)

const [sequence, setSequence] = useState([1,2,3,4,5,6,7,8,9])

useEffect(() => {
  const startSequence=()=>{
 setSequence([...sequence,randomNumber()])
}
 startSequence()
  
}, [sequence])

// const squareLighting=()=>{
//   for( SquareButton of sequence){ 
//     document.getElementById(sequence.id).id
//     SquareButton.find(e=> e.value===)
//     setTimeout
//   }
  
// }


  return (
    <Context.Provider value={{score,setScore}}>
        {children}
    </Context.Provider>
  )
}
