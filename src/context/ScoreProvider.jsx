import { useEffect, useState } from "react";
import { Context } from "./Context";
import Swal from "sweetalert2";

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [sequence, setSequence] = useState([1,2,3,4,5]);
  const [currentScore, setCurrentScore] = useState(0)

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const randomNumber = () => getRandomArbitrary(1, 9);


  useEffect(() => {
    const startSequence = () => {
      setSequence([...sequence, randomNumber()]);
    };
    startSequence();
  }, []);

  const squareLighting = async () => {
    
    for (let currentValue of sequence) {
     
      let button = document.getElementById(currentValue);
      button.style.opacity = "1";
      await new Promise((r) => setTimeout(r, 1000));
      button.style.opacity = ".5";
    }
    
  };
 

  const eventComparison=(e)=>{
    const value =e.target.value
    
    if (sequence[currentScore]== value){
      
      setCurrentScore(oldScore=>(oldScore+1))
      setScore((oldData)=>(oldData+10))
    }else {
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'ok'
      })
    }
  }


  return (
    <Context.Provider value={{ score, squareLighting ,eventComparison}}>
      {children}
    </Context.Provider>
  );
};