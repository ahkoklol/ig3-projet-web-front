import React from 'react'
import "./App.css"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { Products, Navbar } from './components';
import { Switch } from '@mui/material';


const App = () => {
  return (
    <Router>
        <div className="App">
            <Navbar />
            
            <Products />
        </div>
    </Router>
  )
}

export default App