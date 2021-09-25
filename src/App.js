import React, { useEffect } from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import Lists from "./components/Lists";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const todos = JSON.parse(localStorage.getItem("todos"));

  useEffect(() => {
    if (todos) {
      dispatch({ type: "GET_ALL_ITEMS", payload: todos });
    }
  }, []);

  return (
    <div className="app">
      <h3 className="app_title">Excellence Technologie Assessment</h3>
      <h2>ToDo List</h2>
      <AddForm />
      <Lists />
    </div>
  );
}

export default App;
