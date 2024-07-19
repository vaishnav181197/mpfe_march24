import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import { Route,Routes } from 'react-router-dom'
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import History from './Pages/History'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/his' element={<History/>}/>
      </Routes>
      <ToastContainer/>
      <Footer/>
    </>
  )
}

export default App
