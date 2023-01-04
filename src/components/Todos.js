import React, { useContext } from "react";
import { ConfigContext } from "../TodoContext";

export const Todo = ({ task, ...extra }) => (
  <div className="card mb-3 bt-3" {...extra}>
    <div className="card-body">
      <h5 className="card-title">{task.text}</h5>
      <p className="card-text">{task.description}</p>
      <div className="footer">
        <small>{new Date(task.createdOn).toUTCString()}</small>
      </div>
    </div>
  </div>
);

export const ToDos = ({ tasks = [] }) => {
  const conf = useContext(ConfigContext);

  return (
    <>
      {tasks.sort(conf.sorter).map((task, index) => (
        <Todo task={task} key={index} />
      ))}
    </>
  );
};
