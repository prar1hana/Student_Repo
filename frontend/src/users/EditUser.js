import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: {
      departmentName: "",
      departmentCode: ""
    }
  });

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

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8083/student/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8083/student/${id}`);
    setUser(result.data);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Edit Student</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='firstName' className='form-label'>First Name</label>
              <input type="text" className='form-control' placeholder='Enter first name' name='firstName' value={user.firstName} onChange={onInputChange} />
            </div>

            <div className='mb-3'>
              <label htmlFor='lastName' className='form-label'>Last Name</label>
              <input type="text" className='form-control' placeholder='Enter last name' name='lastName' value={user.lastName} onChange={onInputChange} />
            </div>

            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>Email</label>
              <input type="email" className='form-control' placeholder='Enter email' name='email' value={user.email} onChange={onInputChange} />
            </div>

            <div className='mb-3'>
              <label htmlFor='departmentName' className='form-label'>Department Name</label>
              <input type="text" className='form-control' placeholder='Enter department name' name='departmentName' value={user.department.departmentName} onChange={onInputChange} />
            </div>

            <div className='mb-3'>
              <label htmlFor='departmentCode' className='form-label'>Department Code</label>
              <input type="text" className='form-control' placeholder='Enter department code' name='departmentCode' value={user.department.departmentCode} onChange={onInputChange} />
            </div>

            <button type='submit' className='btn btn-outline-primary'>Submit</button>
            <Link className='btn btn-outline-danger mx-2' to='/'>Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
