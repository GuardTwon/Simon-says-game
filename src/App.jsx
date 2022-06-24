import React from 'react'
import { Board } from './components/Scores/Board'
import { Grid } from './components/Grid'
import { Provider } from './context/Provider';

export const App = () => {
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  for (let x=0;x<20;x++){
    const arr =[]
    
    const s= [...arr,getRandomArbitrary(1,10)]
  }
  
  return (
    <Provider>
      
      <Board/>
      <Grid/>
  
    </Provider>
  )
}
