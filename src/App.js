import React, { useState } from "react";
import Header from "./components/Header";
import ToDos from "./components/Todos";
import NewTask from "./components/NewTask";
import Config from "./TodoContext";
import config from "./config";
import _tasks from "./_initial";

const App = () => {
  const [tasks, updateTasks] = useState(_tasks);

  return (
    <Config.Provider value={config}>
      <Header app={config.app} />
      <div className="container">
        <NewTask addTodo={task => updateTasks([...tasks, task])} />
        <hr />
        <ToDos tasks={tasks} />
      </div>
    </Config.Provider>
  );
};

export default App;
