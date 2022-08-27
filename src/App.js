import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LaptopInfoPage from './pages/LaptopInfoPage'
import WorkerInfoPage from './pages/WorkerInfoPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/workerinfo' element={<WorkerInfoPage />} />
      <Route path='/laptopinfo' element={<LaptopInfoPage />} />
    </Routes>
  )
}

export default App
