import { useState } from 'react'
import './App.css'
import { Route, Navigate, Routes } from 'react-router-dom'
import Main from './components/Main'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
  const user = localStorage.getItem("token")

  return (
    <Routes>
      {user && <Route path='/' exact element={<Main/>}/>}
      <Route path='/signup' exact element={<Signup/>}/>
      <Route path='/login' exact element={<Login/>}/>
      <Route path='/' exact element={<Navigate replace to="/login"/>}/>
    </Routes>
  )
}

export default App
