import 'bootstrap/dist/css/bootstrap.min.css';
import Container from '../components/Container';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import {useState} from 'react';
import profile from '../profile.png';

function EditProfile() {
    const [style, setStyle] = useState({
        backgroundImage: `url(${profile})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        width: "100px",
        height: "100px"
    })

    const showPreview = (objFileInput) => {
        console.log(objFileInput.target.files[0])
        if (objFileInput.target.files[0]) {
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
                console.log(e.target.result);
                setStyle({
                    backgroundImage:`url(${e.target.result})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "100px",
                    height: "100px"
                })
            }
            fileReader.readAsDataURL(objFileInput.target.files[0]);
        }   
    }

    const openExplorer = () => {
        document.getElementById('file').click();
    }
    
  return (
      <>
        <Navbar />
        <Container>
            <div className="col-md-7 mt-3 mb-3">
                <Link to='/profile' className="nav-link"><i class="fa-solid fa-angle-left"></i> Back</Link>
            </div>
            <div className="col-md-7 border rounded">
                <div className="row p-4">
                    <div className="col-12">
                        <p className="h4">Change Info</p>
                        <p className="small">Changes will be reflected to every services</p>
                        <div className="row">
                            <div className="col-md-2 col-4">
                                <div className="rounded" style={style}>
                                    <div className="bg-light-black d-flex justify-content-center align-items-center">
                                        <i class="fa-solid fa-camera text-light"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-10 col-8 mt-4">
                                <button className="btn text-danger" onClick={openExplorer} >CHANGE PHOTO</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row border-bottom p-4 pt-2 pb-2">
                    <div className="col-12">
                        <div className="mb-3">
                            <label for="name" className="form-label">Name</label>
                            <input type="file" name="file" className="d-none" id="file" onChange={showPreview}/>
                            <input type="text" className="form-control rounded" id="name" placeholder="Enter your name..." />
                        </div>
                        <div className="mb-3">
                            <label for="bio" className="form-label">Bio</label>
                            <textarea className="form-control rounded" id="bio" rows="3" placeholder="Enter your bio..."></textarea>
                        </div>
                        <div className="mb-3">
                            <label for="phone" className="form-label">Phone</label>
                            <input type="text" className="form-control rounded" id="phone" placeholder="Enter your phone..." />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="email" className="form-control rounded" id="email" placeholder="Enter your email..." />
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">Password</label>
                            <input type="password" className="form-control rounded" id="password" placeholder="Enter your new password..." />
                        </div>
                        <button type="submit" class="btn btn-primary mb-3">Save</button>
                    </div>
                </div>
            </div>
        </Container>
      </>
    
  );
}

export default EditProfile;