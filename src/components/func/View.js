import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const View = () => {
    const [user, setUser] = useState({
        namee: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });
    const { id } = useParams();
    useEffect(() => {
        
        loadUser();
    }, []);
    const loadUser = async () => {
        
        const res = await axios.get(`https://6381c65053081dd549883e8c.mockapi.io/CRUD/${id}`);
        setUser(res.data);
    };
    return (
        <div className="container my-5 shadow p-4 color">
            <div className="d-flex justify-content-between">

            <h1 className="bold display-5">User Id : {id}</h1>
            <Link to='/'><button className="btn btn-outline-danger py-2 mt-3 hidden-3">Back To Home</button></Link>
            </div>

            <hr />
            <ul className="list-group w-75">
                <li className="list-group-item">Name : {user.namee}</li>
                <li className="list-group-item">Username : {user.username}</li>
                <li className="list-group-item">Email : {user.email}</li>
                <li className="list-group-item">Phone no : {user.phone}</li>
                <li className="list-group-item">Website : {user.website}</li>
            </ul>
        </div>
    )
}

export default View;