import React from "react";
import Task from "./Task";

function TaskList({ deleteTask, tasks }) {
  return (
    <div className="tasks">
      {tasks.map((task) => {
        return (<Task text={task.text} category={task.category} deleteTask={deleteTask}/>);
      })}
    </div>
  );
}

export default TaskList;
