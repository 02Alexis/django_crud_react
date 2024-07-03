import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/tasks">
        <h1>Tareas</h1>
      </Link>
      <Link to="/tasks-create">Crear tarea</Link>
    </div>
  );
}

export default Navigation;
