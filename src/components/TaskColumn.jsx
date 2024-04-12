import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({
  taskStatusTitle,
  taskIcon,
  tasks,
  status,
  handleDelete,
}) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={taskIcon} alt="" />
        {taskStatusTitle}
      </h2>

      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              tags={task.tags}
              title={task.task}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </section>
  );
};

export default TaskColumn;
