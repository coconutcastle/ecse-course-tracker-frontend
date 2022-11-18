import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LandingPage } from './routes/LandingPage';
import { CreateAccountPage } from './routes/CreateAccountPage';
import { LoginPage } from './routes/LoginPage';
import { SideMenu } from './components/SideMenu';
import { MajorsAndMinorsPage } from './routes/MajorsAndMinorsPage';
import { DegreeVisualizerPage } from './routes/visualizer/DegreeVisualizerPage';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

const App: React.FC = () => {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <BrowserRouter> 
      {isLoggedIn && <SideMenu setIsLoggedIn={setIsLoggedIn}/>}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/create" element={<CreateAccountPage setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/programs" element={<MajorsAndMinorsPage />} />
        <Route path="/visualizer" element={<DegreeVisualizerPage />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
