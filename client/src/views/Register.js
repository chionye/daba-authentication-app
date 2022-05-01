import 'bootstrap/dist/css/bootstrap.min.css';
import Container from '../components/Container';
import AuthService from '../services/auth.service';
// import {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';

function Register() {
  // const [message,setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    AuthService.register(data.get('email'), data.get('password'))
    .then(response => {
      if(response.success){
        // setMessage(response.data.message);
      }else{
        // setMessage(response.data.message);
    }})
  };
    return (
      <Container>
        <div className="col-md-4 border rounded p-50-2x h-md-75 d-flex align-items-center">
        <form onSubmit={handleSubmit}>
            <img src={logo} alt="logo" /> 
            <h4 className="h4">Join thousands of learners from around the world </h4>
            <p className="small">Master web development by making real-life projects. There are multiple paths for you to choose</p>
            <div className="input-group pt-3 mb-2">
                <span className="input-group-text bg-none" id="basic-addon1"><i class="fa-solid fa-envelope text-secondary"></i></span>
                <input
                type="email"
                name="email"
                className="form-control border-left-none"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1" />
            </div>
            <div className="input-group pt-1 mb-2">
                <span className="input-group-text bg-none" id="basic-addon1"><i class="fa-solid fa-lock text-secondary"></i></span>
                <input
                type="password"
                name="password"
                className="form-control border-left-none"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon2" />
            </div>
            <button type="submit" className="btn bt-bgn-blue w-100 text-light mt-3 rounded">Start coding now</button>
            <div className="text-center mt-4">
              <p>or continue with these social profile</p>
            </div>
            <div className="text-center mt-all">
              <Link to="/">
                <span className="border rounded-circle p-all">
                  <i class="fa-brands text-secondary fa-google"></i>
                </span>
              </Link>
              <Link to="/">
                <span className="border rounded-circle p-all">
                  <i class="fa-brands text-secondary fa-facebook-square"></i>
                </span>
              </Link>
              <Link to="/">
                <span className="border rounded-circle p-all">
                  <i class="fa-brands text-secondary fa-twitter"></i>
                </span>
              </Link>
              <Link to="/">
                <span className="border rounded-circle p-all">
                  <i class="fa-brands text-secondary fa-github"></i>
                </span>
              </Link>
            </div>
            <div className="text-center mt-all">
              <Link to="/" className="nav-link text-secondary">
                Already a member? Login
              </Link>
            </div>
            </form>
        </div>
    </Container>
    );
  }

export default Register;