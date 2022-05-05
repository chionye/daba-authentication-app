import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './views/Login';
import Register from './views/Register'
import Profile from './views/Profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
