import { useState } from "react";
import { nanoid } from "nanoid";
import Header from "./Composants/Header";
import TodoList from "./Composants/TodoList";
import TodoListContainer from "./Composants/TodoListContainer";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  console.log(completedTasks);
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const deleteCompletedTask = () => {};

  return (
    <>
      <Header
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
        tasks={tasks}
        setTasks={setTasks}
      />
      <TodoListContainer
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
        tasks={tasks}
        completedTasks={completedTasks}
        setCompletedTasks={setCompletedTasks}
        deleteTask={deleteTask}
      >
        <TodoList
          darkTheme={darkTheme}
          setDarkTheme={setDarkTheme}
          tasks={tasks}
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
          deleteTask={deleteTask}
        />
      </TodoListContainer>
    </>
  );
}

export default App;
