import React, { useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";

import "./List.css";

function Lists() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.todoReducer);
  const deleteTodo = (itemId) => {
    dispatch({ type: "DELETE_ITEM", payload: itemId });
  };
  const setEditTodo = (item) => {
    dispatch({ type: "SELECT_ITEM", payload: item });
  };
  useEffect(() => {
    if (items) {
      localStorage.setItem("todos", JSON.stringify(items));
    }
  }, [items]);
  return (
    <div className="list_items">
      {items &&
        items.map((todoItem) => {
          return (
            <div className="list_item" key={todoItem.id}>
              <h3 className="">{todoItem.todo}</h3>
              <div className="actions">
                <button
                  className="action_button"
                  onClick={() => setEditTodo(todoItem)}
                >
                  <EditIcon />
                </button>
                <button
                  className="action_button"
                  onClick={() => deleteTodo(todoItem.id)}
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Lists;
