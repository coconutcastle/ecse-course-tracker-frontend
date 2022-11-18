import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LandingPage } from './routes/LandingPage';
import { CreateAccountPage } from './routes/CreateAccountPage';
import { LoginPage } from './routes/LoginPage';
import { MajorsAndMinorsPage } from './routes/MajorsAndMinorsPage';
import { DegreeVisualizerPage } from './routes/DegreeVisualizerPage';
import './App.css'

const App: React.FC = () => {

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create" element={<CreateAccountPage />} />
        <Route path="/programs" element={<MajorsAndMinorsPage />} />
        <Route path="/visualizer" element={<DegreeVisualizerPage />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
