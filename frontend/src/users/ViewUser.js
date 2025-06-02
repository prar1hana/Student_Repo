import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: {
      departmentName: "",
      departmentCode: ""
    }
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8083/student/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Student Details</h2>

          <div className="card">
            <div className="card-header">
              <b>Details of Student ID:</b> {user.studentId}
              <ul className="list-group list-group-flush mt-2">
                <li className="list-group-item">
                  <b>Full Name: </b>
                  {`${user.firstName ?? ""} ${user.lastName ?? ""}`}
                </li>
                <li className="list-group-item">
                  <b>Email: </b>
                  {user.email ?? "N/A"}
                </li>
                <li className="list-group-item">
                  <b>Department Name: </b>
                  {user.department?.departmentName ?? "N/A"}
                </li>
                <li className="list-group-item">
                  <b>Department Code: </b>
                  {user.department?.departmentCode ?? "N/A"}
                </li>
              </ul>
            </div>
          </div>

          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
