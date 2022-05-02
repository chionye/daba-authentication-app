import 'bootstrap/dist/css/bootstrap.min.css';
import Container from '../components/Container';
import {Link} from 'react-router-dom';
import profile from '../profile.png';
import Navbar from '../components/Navbar';
import {useEffect, useState} from 'react';
import AuthService from '../services/auth.service';

function Profile() {
  const [name, setName] = useState("Xanthe Neal");
  const [phone, setPhone] = useState("908249274292");
  const [email, setEmail] = useState("xanthe.neal@gmail.com");

  useEffect(()=>{
    AuthService.getUserInformation()
    .then((response)=>{
        if (response) {
            setName(response.name);
            setPhone(response.phone);
            setEmail(response.email);
        }
    });
  }, [])
  return (
      <>
        <Navbar />
        <Container>
            <div className="text-center">
                <p className="h2">Personal info</p>
                <p className="lead">Basic info, like your name and photo</p>
            </div>
            <div className="col-md-7 border rounded">
                <div className="row border-bottom p-4">
                    <div className="col-6">
                        <p className="h4">Profile</p>
                        <p className="small">
                        Some info may be visible to other people
                        </p>
                    </div>
                    <div className="col-6">
                        <Link to="/edit-profile" className="btn btn-outline-secondary float-end mt-3">Edit</Link>
                    </div>
                </div>
                <div className="row border-bottom p-4 pt-2 pb-2">
                    <div className="col-6">
                        <p className="lead mt-4">PHOTO</p>
                    </div>
                    <div className="col-6">
                        <img src={profile} alt="profile" className="rounded w-25 mt-3 mt-md-0"/>
                    </div>
                </div>
                <div className="row border-bottom p-4">
                    <div className="col-6">
                        <p className="lead">NAME</p>
                    </div>
                    <div className="col-6">
                        <p className="h6">{name}</p>
                    </div>
                </div>
                <div className="row border-bottom p-4">
                    <div className="col-6">
                        <p className="lead">PHONE</p>
                    </div>
                    <div className="col-6">
                        <p className="h6 text-truncate">{phone}</p>
                    </div>
                </div>
                <div className="row border-bottom p-4">
                    <div className="col-6">
                        <p className="lead">EMAIL</p>
                    </div>
                    <div className="col-6">
                        <p className="h6 text-truncate">{email}</p>
                    </div>
                </div>
                <div className="row border-bottom p-4">
                    <div className="col-6">
                        <p className="lead">PASSWORD</p>
                    </div>
                    <div className="col-6">
                        <p className="h4">************</p>
                    </div>
                </div>
            </div>
        </Container>
      </>
    
  );
}

export default Profile;