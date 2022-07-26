import React, { useState } from "react";
import { useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [taskArray, setTaskArray] = useState(TASKS);
  const [filteredTasks, setFilteredTasks] = useState(TASKS);
  const [currentFilter, setCurrentFilter] = useState("All");

  useEffect(() => {
    if (currentFilter === "All") {
      setFilteredTasks(taskArray);
    } else {
      const newArray = taskArray.filter((task) => {
        return task.category === currentFilter;
      });
      setFilteredTasks(newArray);
    }
  }, [currentFilter, taskArray]);

  function deleteTask(text) {
    const newArray = taskArray.filter((task) => task.text !== text);
    setTaskArray(newArray);
  }

  function addTask(text, category) {
    const newTask = {
      text: text,
      category: category,
    };

    setTaskArray([...taskArray, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        filterByCategory={setCurrentFilter}
      />
      <NewTaskForm addTask={addTask} categories={CATEGORIES} />
      <TaskList deleteTask={deleteTask} tasks={filteredTasks} />
    </div>
  );
}

export default App;
