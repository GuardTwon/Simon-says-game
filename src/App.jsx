import React from 'react'
import { Board } from './components/Scores/Board'
import { Grid } from './components/Grid'
import { ScoreProvider } from './context/ScoreProvider'

export const App = () => {
 
  return (
    
      <ScoreProvider>

      <Board />
      <Grid/>
      </ScoreProvider>
  
   
  )
}
