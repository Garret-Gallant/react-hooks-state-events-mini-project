import React, { useState } from "react";
import { isCompositeComponent } from "react-dom/test-utils";

function NewTaskForm({ addTask, categories }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");
  
  return (
    <form
      className="new-task-form"
      onSubmit={(e) => {
        e.preventDefault();
        addTask(text, category);
      }}
    >
      <label>
        Details
        <input
          type="text"
          name="text"
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select onChange={(e) => setCategory(e.target.value)} name="category">
          {categories.map((category) => {
            return category === "All" ? null : <option>{category}</option>;
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
