import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom"; 

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    duration: "",
    day: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Workout Details</h2>

          <div className="card">
            <div className="card-header">
              Details of workout id : {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Workout Name: </b>
                  {user.name}
                </li>
                <li className="list-group-item">
                  <b>Duration: </b>
                  {user.duration}
                </li>
                <li className="list-group-item">
                  <b>Day: </b>
                  {user.day}
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
