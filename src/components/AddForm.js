import React, { useEffect, useState } from "react";
import "./AddForm.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";

function AddForm() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const [isEmpty, setIsEmpty] = useState(null);
  const { selectItem } = useSelector((state) => state.todoReducer);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todo) {
      setIsEmpty(true);
    } else if (todo && selectItem) {
      dispatch({ type: "EDIT_ITEM", payload: { ...selectItem, todo } });
      dispatch({ type: "SELECT_ITEM", payload: null });
      setTodo("");
    } else {
      dispatch({ type: "ADD_ITEM", payload: { id: uuidv4(), todo } });
      setTodo("");
    }
  };

  useEffect(() => {
    if (selectItem) setTodo(selectItem.todo);
  }, [selectItem]);

  return (
    <div className="input-section">
      <form className="input_form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={handleChange}
          onFocus={() => setIsEmpty(null)}
          placeholder="Add Todo"
        />
        <button type="submit" className="add_button">
          {selectItem ? "Edit" : "Add"}
        </button>
      </form>
      <small className="error">{isEmpty && "field required"}</small>
    </div>
  );
}

export default AddForm;
