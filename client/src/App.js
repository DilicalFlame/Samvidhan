import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageNotAvailable from './pages/PageNotAvailable'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import Login from './components/Login1'

function App() {
  return (
    <div>
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotAvailable />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path='/spin' element={<MySpinWheel />} /> */}
          
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  )
}

export default App
