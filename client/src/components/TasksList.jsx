import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks";
import TaskCard from "./TaskCard";

function TasksList() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    async function loadTask() {
      const res = await getAllTasks();
      setTasks(res.data);
    }
    loadTask();
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default TasksList;
