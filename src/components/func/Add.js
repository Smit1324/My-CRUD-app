import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        namee: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });
    const { namee, username, email, phone, website } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const onSubmit = async e => {
        e.preventDefault();

        if (!namee || !username || !email || !phone || !website) {
            toast.warn('Please fill all the input areas', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            await axios.post("https://6381c65053081dd549883e8c.mockapi.io/CRUD", user);
            toast.success('Adding...', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => navigate('/'), 3000);
        }
    }
    return (
        <>

            <div className="container my-5">
                <div className="w-100 mx-auto shadow p-5 color">
                    <div className="d-flex justify-content-between mb-3">

                        <h2 className="bold">ADD USER</h2>
                        <Link to='/'><button className="btn btn-outline-danger hidden-3">Back To Home</button></Link>
                    </div>
                    <hr />
                    <form onSubmit={e => onSubmit(e)}>

                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label">Name</label>
                            <input type="text" class="form-control" id="desc" placeholder="Enter Your name" name="namee" value={namee} onChange={e => onInputChange(e)} />
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label">Username</label>
                            <input type="text" class="form-control" id="desc" placeholder="Enter Your Username" name="username" value={username} onChange={e => onInputChange(e)} />
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label">Email</label>
                            <input type="email" class="form-control" id="desc" placeholder="Enter Your email" name="email" value={email} onChange={e => onInputChange(e)} />
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label">Phone no.</label>
                            <input type="text" class="form-control" id="desc" placeholder="Enter Your phone number" name="phone" value={phone} onChange={e => onInputChange(e)} />
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label">Website</label>
                            <input type="text" class="form-control" id="desc" placeholder="Enter Your website" name="website" value={website} onChange={e => onInputChange(e)} />
                        </div>
                        <button className="btn btn-outline-success px-4">ADD USER</button>
                    </form>
                </div>
            </div>

            <ToastContainer />

        </>


    )
}

export default Add;