import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, redirect } from 'react-router-dom';
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
import { ThemeProvider, createTheme } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

//icon source: https://www.pinterest.ca/pin/647322146435963818/

const MuiTheme = createTheme({
  palette: {
    primary: {
      main: '#8f78a2'
    },
    secondary: {
      main: '#8f78a2'
    }
  }
});

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [allUsers, setAllUsers] = useState<UserInfo[]>(JSON.parse(JSON.stringify(usersData)));
  const [user, setUser] = useState<UserInfo | undefined>(undefined);

  return (
    <ThemeProvider theme={MuiTheme}>
    <BrowserRouter> 
      {(isLoggedIn && user) && <SideMenu setIsLoggedIn={setIsLoggedIn} setUser={setUser} />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage allUsers={allUsers} setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
        <Route path="/create" element={<CreateAccountPage setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
        <Route path="/programs" element={<MajorsAndMinorsPage />} />
        {(isLoggedIn && user) && <Route path="/profile" element={<ProfilePage user={user} setUser={setUser} />} />}
        <Route path="/curriculum" element={<CurriculumPage />} />
        {(isLoggedIn && user) && <Route path="/visualizer" element={<DegreeVisualizerPage user={user} setUser={setUser} />} />}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    
    </BrowserRouter></ThemeProvider>
  )
}

export default App
