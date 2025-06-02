import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: {
      departmentName: "",
      departmentCode: ""
    }
  });

  const { firstName, lastName, email, department } = user;

  const onInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "departmentName" || name === "departmentCode") {
      setUser({
        ...user,
        department: {
          ...user.department,
          [name]: value
        }
      });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8083/student", user);
      navigate("/");
    } catch (error) {
      console.error("Failed to add user:", error);
      // Optionally show error message to user
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Register User</h2>
          <form onSubmit={onSubmit}>
            <div className='mb-3'>
              <label htmlFor='firstName' className='form-label'>First Name</label>
              <input
                type="text"
                className='form-control'
                placeholder='Enter your first name'
                name='firstName'
                value={firstName}
                onChange={onInputChange}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='lastName' className='form-label'>Last Name</label>
              <input
                type="text"
                className='form-control'
                placeholder='Enter your last name'
                name='lastName'
                value={lastName}
                onChange={onInputChange}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>Email</label>
              <input
                type="email"
                className='form-control'
                placeholder='Enter your email'
                name='email'
                value={email}
                onChange={onInputChange}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='departmentName' className='form-label'>Department Name</label>
              <input
                type="text"
                className='form-control'
                placeholder='Enter department name'
                name='departmentName'
                value={department.departmentName}
                onChange={onInputChange}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='departmentCode' className='form-label'>Department Code</label>
              <input
                type="text"
                className='form-control'
                placeholder='Enter department code'
                name='departmentCode'
                value={department.departmentCode}
                onChange={onInputChange}
              />
            </div>

            <button type='submit' className='btn btn-outline-primary'>Submit</button>
            <Link className='btn btn-outline-danger mx-2' to='/'>Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
