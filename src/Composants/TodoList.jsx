import TodoItem from "./TodoItem";
import Infobar from "./Infobar";
import styles from "./TodoList.module.css";

export default function TodoList({
  darkTheme,
  setDarkTheme,
  tasks,
  completedTasks,
  setCompletedTasks,
  deleteTask,
}) {
  return (
    <div
      className={
        darkTheme ? styles.todolistContainerDark : styles.todolistContainer
      }
    >
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          taskData={task}
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
          deleteTask={deleteTask}
          darkTheme={darkTheme}
        />
      ))}

      <Infobar darkTheme={darkTheme} tasks={tasks} />
    </div>
  );
}
