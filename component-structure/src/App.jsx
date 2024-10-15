import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'

// Login komponentinde const olarak export edilen alan burada import edildi.
import { users } from './Login'


function App() {
  console.log(users);
  return (
    //Fragment "<></>"
    <>
      <Login />
    </>
  )
}

export default App
