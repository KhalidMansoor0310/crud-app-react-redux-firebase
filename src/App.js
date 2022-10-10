import React, { useSelector } from "react-redux";
import Form from "./components/Form";
import Todos from "./components/Todos";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTasks } from "./actions/Actions";
import { useState } from "react";
import Spinner from "./components/Spinner";

function App() {
  const tasks = useSelector((state) => state.todos);
  const [loading, setLoading] = useState("false");

  const dispatch = useDispatch();
  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [TaskToBeEdited, setTaskToBeEdited] = useState("");

  // click on edit icon
  const handleEdit = (taskObj) => {
    setEditFormVisibility(true);
    setTaskToBeEdited(taskObj);
  };

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <div className="container my-5 m-auto">
      <div className="row">
        <div className="col-md-12">
          <Form
            TaskToBeEdited={TaskToBeEdited}
            editFormVisibility={editFormVisibility}
          />
          {tasks.length > 0 ? (
            <Todos
              tasks={tasks}
              editFormVisibility={editFormVisibility}
              handleEdit={handleEdit}
              TaskToBeEdited={TaskToBeEdited}
            />
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
