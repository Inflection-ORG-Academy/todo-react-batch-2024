import React, { useState } from "react";

import style from "./App.module.css";

function App() {
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputTask);
    setTasks((prevState) => [
      { task: inputTask, isCompleted: false },
      ...prevState,
    ]);

    setInputTask("");
  }

  function updateTask(index) {
    console.log(index);
    setTasks(
      tasks.map((item, elIndex) =>
        elIndex === index ? { ...item, isCompleted: true } : item
      )
    );
  }

  return (
    <React.Fragment>
      <section className={style.todoSection}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Write Tasks.."
            required
            id="task"
            name="task"
            value={inputTask}
            onChange={(e) => {
              setInputTask(e.target.value);
            }}
          />
          <button type="submit">Add Task</button>
        </form>

        <ul>
          {tasks.map((element, index) => (
            <li
              key={index}
              style={
                element.isCompleted
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
            >
              <p>{element.task}</p>
              <div>
                <button
                  onClick={() => {
                    updateTask(index);
                  }}
                >
                  Done
                </button>
                <button>Del</button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </React.Fragment>
  );
}

export default App;
