import React from 'react'
import { ScoreProvider } from './context/ScoreProvider'

import { AppRouter } from './routes/AppRouter'

export const App = () => {
 
  return (
    
      <ScoreProvider>
        <AppRouter/>
      </ScoreProvider>
  
   
  )
}
