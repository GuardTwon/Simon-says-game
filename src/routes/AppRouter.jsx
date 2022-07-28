import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { GamePage } from '../components/pages/GamePage'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
  return (
    
    <Routes>
        <Route path='/' element={<GamePage/>}/>
        <Route path='/auth/*' element={<AuthRouter/>}/>
    </Routes>
  )
}
