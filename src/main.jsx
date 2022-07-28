import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {App} from './App'
import { TableScores } from './components/Scores/TableScores'

import './index.css'
// import { AppRouter } from './routes/AppRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
