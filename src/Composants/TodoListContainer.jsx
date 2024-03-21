import { useState } from "react";
import styles from "./TodoListContainer.module.css";

export default function TodoListContainer({
  darkTheme,
  setDarkTheme,
  tasks,
  setTasks,
  deleteTask,
  children,
}) {
  return (
    <div className={darkTheme ? styles.containerDark : styles.container}>
      {children}
    </div>
  );
}
