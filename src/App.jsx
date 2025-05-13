import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Fruits from './components/Fruits'
import Fruit from './components/Fruit'
import EditFruit from './components/EditFruit'
import CreateFruit from './components/CreateFruit'

function App() {
  

  return (
    <div className='App'>
  <h2>This is my Fruits App</h2>
  <Routes>
    <Route path='/' element={<Fruits/>}/>
    <Route path='/new' element={<CreateFruit/>}/>
    <Route path='/edit/:id' element={<EditFruit/>}/>
    <Route path='/:id' element={<Fruit/>}/>  
  </Routes>
  </div>
  )
}

export default App
