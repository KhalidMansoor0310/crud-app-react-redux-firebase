import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../actions/Actions";

function Form() {
  const dispatch = useDispatch();
  //   const [isNo, setIsNo] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      //   isNo,
      name,
      email,
    };

    dispatch(addTask(data));

    setName("");
    setEmail("");
  };

  return (
    <>
      <div className="container p-4">
        <h2>Redux + Firebase + CRUD</h2>
        <div className="row">
          <form className="form-group container my-3" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-4">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>

              <div className="col-md-4">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              <div className="col-3 mt-4 m-auto">
                <button
                  type="submit"
                  className="btn btn-success btn-md submit-btn"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
