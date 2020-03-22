import React, { useState } from "react";
import Header from "./components/Header";
import ToDos from "./components/Todos";
import NewTask from "./components/NewTask";
import _tasks from "./_initial";

const App = () => {
  const [tasks, updateTasks] = useState(_tasks);

  return (
    <>
      <Header />
      <div className="container">
        <NewTask addTodo={task => updateTasks([...tasks, task])} />
        <hr />
        <ToDos tasks={tasks} />
      </div>
    </>
  );
};

export default App;
