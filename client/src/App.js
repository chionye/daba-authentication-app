import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';
import Profile from './views/Profile';
import EditProfile from './views/Edit-Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/profile'} element={<Profile />} />
        <Route path={'/edit-profile'} element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
