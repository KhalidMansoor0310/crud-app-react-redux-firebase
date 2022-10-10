import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../actions/Actions";
import Spinner from "./Spinner";

function Todos({ tasks }) {
  const dispatch = useDispatch();
  const [editTodo, setEditTodo] = useState({ isNo: "", name: "", email: "" });
  const [loading, setLoading] = useState("false");
  const handleEdit = (e) => {
    e.preventDefault();

    dispatch(updateTask(editTodo));
  };
  return (
    <div className="container">
      <div className="row">
        <div className="my-3">
          <table className="table table-bordered">
            <thead className="bg bg-secondary">
              <tr className="text-white">
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading == "false" ? (
                tasks.map((task) => (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.email}</td>

                    <td>
                      <button
                        className="btn btn-danger m-3"
                        onClick={() => dispatch(deleteTask(task.id))}
                      >
                        Delete
                      </button>

                      <button
                        type="button"
                        class="btn btn-primary m-3"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        className="btn btn-primary"
                        onClick={() => setEditTodo(task)}
                      >
                        Edit
                      </button>

                      <div
                        class="modal fade"
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="staticBackdropLabel">
                                Edit your selected Task
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <form onSubmit={handleEdit}>
                                <div class="modal-body text-dark">
                                  <input
                                    className="form-control"
                                    type="text"
                                    value={editTodo.name}
                                    onChange={(e) =>
                                      setEditTodo({
                                        ...editTodo,
                                        name: e.target.value,
                                      })
                                    }
                                  />

                                  <input
                                    type="text"
                                    className="form-control my-3"
                                    value={editTodo.email}
                                    onChange={(e) =>
                                      setEditTodo({
                                        ...editTodo,
                                        email: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                  <button
                                    type="button"
                                    class="btn btn-primary"
                                    data-bs-dismiss="modal"
                                    onClick={handleEdit}
                                  >
                                    Update
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <Spinner />
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Todos;
