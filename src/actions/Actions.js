import { ADD_TASK, GET_TODOS, UPDATE_TASK, REMOVE_TASK } from "./ActionsTypes";

import {
  collection,
  addDoc,
  getDoc,
  query,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "@firebase/firestore";
import { db } from "../firebase-config";

export const addTask = (data) => async (dispatch) => {
  await addDoc(collection(db, "todos"), {
    id: new Date().getTime().toString(36),
    name: data.name,
    email: data.email,
  });

  dispatch({
    type: ADD_TASK,
    payload: data,
  });
};

export const getTasks = () => async (dispatch) => {
  // const q = query(collection(db, "todos"));
  // const todos = await getDocs(q);
  // if (todos.docs.length > 0) {
  //   const todosArray = [];
  //   for (var snap of todos.docs) {
  //     const data = snap.data();
  //     todosArray.push(data);
  //   }
  //   dispatch({
  //     type: GET_TODOS,
  //     payload: todosArray,
  //   });
  // }

  // let q = collection(db, "todos");
  // onSnapshot(q, async (data) => {
  //   const todosArray = [];
  //   if (data.docs.length > 0) {
  //     for (var snap of data.docs) {
  //       const data = snap.data();
  //       todosArray.push(data);
  //     }
  //   }
  //   dispatch({
  //     type: GET_TODOS,
  //     payload: todosArray,
  //   });
  //   // console.log(todosArray);
  // });
  const q = query(collection(db, "todos"));
  await onSnapshot(q, (querySnapshot) => {
    const tasks = [];
    querySnapshot.forEach((doc) => {
      tasks.push(doc.data());
    });
    dispatch({
      type: GET_TODOS,
      payload: tasks,
    });
  });
};

export const deleteTask = (id) => async (dispatch) => {
  const q = query(collection(db, "todos"));
  const tasks = await getDocs(q);
  for (var snap of tasks.docs) {
    const data = snap.data();
    if (data.id === id) {
      await deleteDoc(doc(db, "todos", snap.id));
    }
  }

  dispatch({
    type: REMOVE_TASK,
    payload: id,
  });
};

export const updateTask = (editedTask) => async (dispatch) => {
  console.log(editedTask);
  const q = query(collection(db, "todos"));
  const tasks = await getDocs(q);
  for (var snap of tasks.docs) {
    const data = snap.data();
    if (data.id === editedTask.id) {
      const taskref = doc(db, "todos", snap.id);
      await updateDoc(taskref, {
        id: editedTask.id,
        name: editedTask.name,
        email: editedTask.email,
      });
    }
  }
  dispatch({
    type: UPDATE_TASK,
    payload: editedTask,
  });
};
