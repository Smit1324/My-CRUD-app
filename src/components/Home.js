import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("https://6381c65053081dd549883e8c.mockapi.io/CRUD");
        setUser(result.data);
    }

    const deleteuser = async id => {

        if (window.confirm("Do you really want to delete ??")) {
            toast.error('Deleting...', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            await axios.delete(`https://6381c65053081dd549883e8c.mockapi.io/CRUD/${id}`)
            setTimeout(() => loadUsers(), 2000);
        }
    }
    return (
        <div className='container shadow my-5 color'>
            <ToastContainer />
            <h1 className='text-center p-4'>USER DETAILS</h1>
            <div className='py-4 px-3'>
                <table className="table table-striped">
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">Sr.no</th>
                            <th scope="col">Name</th>
                            <th scope="col" className='hidden-2'>User Name</th>
                            <th scope="col" className='hidden'>Email</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={index}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{user.namee}</td>
                                    <td className='hidden-2'>{user.username}</td>
                                    <td className='hidden'>{user.email}</td>
                                    <td>
                                        <Link className="btn btn-outline-primary btn-sm mx-1 mr-1" to={`func/view/${user.id}`}><i class="fa-solid fa-eye"></i></Link>
                                        <Link className="btn btn-outline-primary btn-sm mx-1" to={`func/edit/${user.id}`}><i class="fa-regular fa-pen-to-square"></i></Link>
                                        <Link className="btn btn-outline-danger btn-sm mx-1" onClick={() => deleteuser(user.id)}><i class="fa-solid fa-trash-can"></i></Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;