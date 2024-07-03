import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TasksPgae from "./pages/TasksPgae";
import TasksFormPage from "./pages/TasksFormPage";
import Navigation from "./components/Navigate";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<TasksPgae />} />
        <Route path="/tasks-create" element={<TasksFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
