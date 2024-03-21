import styles from "./Infobar.module.css";

export default function Infobar({ tasks, completedTasks, darkTheme }) {
  return (
    <div className={darkTheme ? styles.infoBarDark : styles.infoBar}>
      <p>items left</p>
      <button>Clear Completed</button>
    </div>
  );
}
