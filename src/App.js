import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LaptopDetailsPage from './pages/LaptopDetailsPage'
import LaptopInfoPage from './pages/LaptopInfoPage'
import LaptopListPage from './pages/LaptopListPage'
import WorkerInfoPage from './pages/WorkerInfoPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/workerinfo' element={<WorkerInfoPage />} />
      <Route path='/laptopinfo' element={<LaptopInfoPage />} />
      <Route path='/laptoplist' element={<LaptopListPage />} />
      <Route path='/laptopinfo/:id' element={<LaptopDetailsPage />} />
    </Routes>
  )
}

export default App
