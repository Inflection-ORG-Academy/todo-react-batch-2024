import React, { useState } from "react";

import style from "./App.module.css";

function App() {
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const preTasks = JSON.parse(localStorage.getItem("tasks"));
    return preTasks ? preTasks : [];
  });

  function handleSubmit(e) {
    e.preventDefault();

    const newTask = [{ task: inputTask, isCompleted: false }, ...tasks];

    setTasks(newTask);

    localStorage.setItem("tasks", JSON.stringify(newTask));

    setInputTask("");
  }

  function updateTask(index) {
    const updatedTasks = tasks.map((item, elIndex) =>
      elIndex === index ? { ...item, isCompleted: true } : item
    );

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  function deleteTask(index) {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);

    localStorage.setItem("tasks", JSON.stringify(newTask));
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "12px",
        backgroundColor: "rgba(235, 0, 0, 1)",
        padding: "12px 12px 0px 12px",
        borderRadius: "12px",
      }}
    >
      <img
        src="/indication_task_girl.png"
        style={{
          height: "500px",
          transform: "scale(-1, 1)",
        }}
      />
      <section className={style.todoSection}>
        <h1>ToDo App</h1>
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

        <div style={{ height: "360px" }}>
          {tasks.length ? (
            <ul
              style={{
                overflowY: "scroll",
                height: "100%",
              }}
            >
              {tasks.map((element, index) => (
                <li
                  key={index}
                  style={
                    element.isCompleted
                      ? {
                          backgroundColor: "rgba(198, 255, 198, 1)",
                        }
                      : { backgroundColor: "rgb(228, 228, 228)" }
                  }
                >
                  <p
                    style={
                      element.isCompleted
                        ? {
                            textDecoration: "line-through",
                          }
                        : { textDecoration: "none" }
                    }
                  >
                    {element.task}
                  </p>
                  <div>
                    <button
                      onClick={() => {
                        updateTask(index);
                      }}
                      style={{ color: "green" }}
                    >
                      &#10004;
                    </button>
                    <button
                      onClick={() => deleteTask(index)}
                      style={{ color: "red" }}
                    >
                      &#10006;
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: "24px",
              }}
            >
              No Task Yet
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
