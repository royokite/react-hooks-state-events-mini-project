import React from "react";

function TaskList({ allTasks }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {allTasks}
    </div>
  );
}

export default TaskList;
