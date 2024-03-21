import { useState } from "react";
import styles from "./TodoItem.module.css";

export default function TodoItem({
  darkTheme,
  setDarkTheme,
  taskData,
  completedTasks,
  setCompletedTasks,
  deleteTask,
}) {
  const [checked, setChecked] = useState(false);

  const handleCheck = () =>{
    setChecked(!checked);
    if(checked){
      setCompletedTasks([...completedTasks, taskData]);
    }else{
      setCompletedTasks(completedTasks.filter(task => task.id != taskData.id))
    }
  }

  

  return (
    <li className={darkTheme ? styles.itemDark : styles.item}>
      <div
        className={checked ? styles.checkedBox : styles.checkbox}
        onClick={handleCheck}
      ></div>
      <span className={checked ? styles.taskChecked : ""}>{taskData.content}</span>
      <button
        className={styles.deleteButton}
        onClick={() => deleteTask(taskData.id)}
      >
        X
      </button>
    </li>
  );
}
