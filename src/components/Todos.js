import React from "react";

export const Todo = ({ task, ...extra }) => (
  <div className="card mb-3 bt-3" {...extra}>
    <div className="card-body">
      <h5 class="card-title">{task.text}</h5>
      <p class="card-text">{task.description}</p>
      <div className="footer">
        <small>{task.createdOn}</small>
      </div>
    </div>
  </div>
);

export default ({ tasks }) => (
  <>
    {(tasks || []).map((task, index) => (
      <Todo task={task} key={index} />
    ))}
  </>
);
