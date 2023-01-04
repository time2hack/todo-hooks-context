import React, { useState } from "react";
import { Header } from "./components/Header";
import { ToDos } from "./components/Todos";
import { NewTask } from "./components/NewTask";
import { ConfigContext } from "./TodoContext";
import { appConfig } from "./config";
import { initialState } from "./_initial";

const App = () => {
  const [tasks, updateTasks] = useState(initialState);

  return (
    <ConfigContext.Provider value={appConfig}>
      <Header app={appConfig.app} />
      <div className="container">
        <NewTask addTodo={(task) => updateTasks([...tasks, task])} />
        <hr />
        <ToDos tasks={tasks} />
      </div>
    </ConfigContext.Provider>
  );
};

export default App;
