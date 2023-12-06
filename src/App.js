import {Routes,Route, Navigate} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const inLogin = JSON.parse(localStorage.getItem('userLogin'))
  console.log(inLogin);
  return (
    <>
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/register' element={<RegisterPage/>} />
    <Route path='/login' element={<LoginPage/>} />
    <Route path='*' element={<NotFoundPage/>} />
    {inLogin? <Route path='/profile' element={<ProfilePage/>} />:<Route path='/profile' element={<Navigate to='/login' />} />}
    </Routes>
    </>
    );
  }
  
  export default App;
  