import { useState } from "react";
import iconMoon from "../assets/images/icon-moon.svg";
import iconSun from "../assets/images/icon-sun.svg";
import bgMobileLight from "../assets/images/bg-mobile-light.jpg";
import styles from "./Header.module.css";
import { nanoid } from "nanoid";

export default function Header({ darkTheme, setDarkTheme, tasks, setTasks }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTasks([...tasks, { id: nanoid(4), content: todo }]);
    setTodo("");
  };

  return (
    <>
      <header className={darkTheme ? styles.headerDark : styles.header}>
        <div className={styles.containerHeader}>
          <div className={styles.navHeader}>
            <h1 className={styles.title}>
              <a href="#">TODO</a>
            </h1>

            <button
              onClick={(theme) => setDarkTheme(!darkTheme)}
              className={styles.buttonSwitchTheme}
            >
              <img
                className={styles.iconSwitchTheme}
                src={darkTheme ? iconSun : iconMoon}
                alt="icone de la lune / solei"
              />
            </button>
          </div>

          <div
            className={
              darkTheme ? styles.inputContainerDark : styles.inputContainer
            }
          >
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.checkTodo}></div>
              <input
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className={darkTheme ? styles.inputTaskDark : styles.inputTask}
                type="text"
                placeholder="Create a new todo..."
              />
            </form>
          </div>
        </div>
      </header>
    </>
  );
}
