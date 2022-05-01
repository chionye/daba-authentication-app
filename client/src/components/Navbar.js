import '../App.css';
import {Link} from 'react-router-dom';
import profile from '../profile.png';
import Logo from '../logo.png';

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">
                <img src={Logo} alt="logo" />
            </Link>
            <div className="d-flex">
            <div className="dropdown">
                
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={profile} className="w-1 rounded-circle" alt="profile" />
                    <small>Xanthe Neal</small>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <Link to="/profile" className="nav-link text-secondary">
                        <i class="fa-solid fa-circle-user ml-2 mr-2"></i> My Profile
                    </Link>
                    <Link to="/"  className="nav-link text-secondary">
                        <i class="fa-solid fa-users"></i> Group Chat
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link to="/"  className="nav-link text-danger">
                        <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout
                    </Link>
                </ul>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;