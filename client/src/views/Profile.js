import 'bootstrap/dist/css/bootstrap.min.css';
import Container from '../components/Container';
import {Link} from 'react-router-dom';
import profile from '../profile.png';
import Navbar from '../components/Navbar';

function Profile() {
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
                        <img src={profile} alt="profile" className="rounded w-25"/>
                    </div>
                </div>
                <div className="row border-bottom p-4">
                    <div className="col-6">
                        <p className="lead">NAME</p>
                    </div>
                    <div className="col-6">
                        <p className="h4">Xanthe Neal</p>
                    </div>
                </div>
                <div className="row border-bottom p-4">
                    <div className="col-6">
                        <p className="lead">PHONE</p>
                    </div>
                    <div className="col-6">
                        <p className="h4 text-truncate">908249274292</p>
                    </div>
                </div>
                <div className="row border-bottom p-4">
                    <div className="col-6">
                        <p className="lead">EMAIL</p>
                    </div>
                    <div className="col-6">
                        <p className="h4 text-truncate">xanthe.neal@gmail.com</p>
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