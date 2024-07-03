import { useEffect } from "react";
import { getAllTasks } from "../api/tasks";

function TasksList() {
  useEffect(() => {
    function loadTask() {
      const res = getAllTasks();
      console.log(res);
    }
    loadTask();
  }, []);

  return <div>TasksList</div>;
}

export default TasksList;
