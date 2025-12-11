import React, { useState } from "react";

import style from "./App.module.css";

function App() {
  const [inputTask, setInputTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Hello");
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
            onChange={(e) => {
              console.log(e.target.value);
              setInputTask(e.target.value);
            }}
          />
          <button type="submit">Add Task</button>
        </form>
        <p>{inputTask}</p>
      </section>
    </React.Fragment>
  );
}

export default App;
