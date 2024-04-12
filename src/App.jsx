import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import TodoIcon from "./assets/direct-hit.png";
import InprogIcon from "./assets/glowing-star.png";
import DoneIcon from "./assets/check-mark-button.png";

const localStorageTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorageTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          taskStatusTitle="To Do"
          taskIcon={TodoIcon}
          status="todo"
          tasks={tasks}
          handleDelete={handleDelete}
        />
        <TaskColumn
          taskStatusTitle="In Progress"
          taskIcon={InprogIcon}
          status="in_progress"
          tasks={tasks}
          handleDelete={handleDelete}
        />
        <TaskColumn
          taskStatusTitle="Done"
          taskIcon={DoneIcon}
          status="done"
          tasks={tasks}
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
