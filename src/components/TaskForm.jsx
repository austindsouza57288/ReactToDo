import React, { useState } from "react";
import Tag from "./Tag";
import "./TaskForm.css";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const selectTag = (tag) => {
    if (taskData.tags.includes(tag)) {
      const fileredTags = taskData.tags.filter((t) => t !== tag);
      setTaskData({
        ...taskData,
        tags: fileredTags,
      });
    } else {
      setTaskData({
        ...taskData,
        tags: [...taskData.tags, tag],
      });
    }
  };

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const handleChange = (e) => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("todo");

  // const handleTaskChange = (e) => {
  //   setTask(e.target.value);
  // };

  // const handleStatusChange = (e) => {
  //   setStatus(e.target.value);
  // };

  // console.log(taskData.tags);
  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          placeholder="Enter your task"
          className="task_input"
          onChange={handleChange}
        ></input>

        <div className="task_form_bottom_line">
          <div>
            <Tag tag="HTML" selectTag={selectTag} selected={checkTag("HTML")} />
            <Tag tag="CSS" selectTag={selectTag} selected={checkTag("CSS")} />
            <Tag
              tag="JavaScript"
              selectTag={selectTag}
              selected={checkTag("JavaScript")}
            />
            <Tag
              tag="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            />
          </div>
          <div>
            <select
              className="task_status"
              name="status"
              value={taskData.status}
              onChange={handleChange}
            >
              <option value="todo">To Do</option>
              <option value="in_progress">In Progress</option>
              <option value="done">Done</option>
            </select>

            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
