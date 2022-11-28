import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LandingPage } from './routes/LandingPage';
import { CreateAccountPage } from './routes/CreateAccountPage';
import { LoginPage } from './routes/LoginPage';
import { SideMenu } from './components/SideMenu';
import { MajorsAndMinorsPage } from './routes/MajorsAndMinorsPage';
import { DegreeVisualizerPage } from './routes/visualizer/DegreeVisualizerPage';
import { ProfilePage } from './routes/ProfilePage';
import { CurriculumPage } from './routes/CurriculumPage';
import { UserInfo } from './common/calendar.interface';
import usersData from './prototype/users.json';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [allUsers, setAllUsers] = useState<UserInfo[]>(JSON.parse(JSON.stringify(usersData)));
  const [user, setUser] = useState<UserInfo | undefined>(undefined);

  return (
    <BrowserRouter> 
      {(isLoggedIn && user) && <SideMenu setIsLoggedIn={setIsLoggedIn} setUser={setUser} />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage allUsers={allUsers} setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
        <Route path="/create" element={<CreateAccountPage setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
        <Route path="/programs" element={<MajorsAndMinorsPage />} />
        {(isLoggedIn && user) && <Route path="/profile" element={<ProfilePage user={user}/>} />}
        <Route path="/curriculum" element={<CurriculumPage />} />
        {(isLoggedIn && user) && <Route path="/visualizer" element={<DegreeVisualizerPage user={user} />} />}
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
