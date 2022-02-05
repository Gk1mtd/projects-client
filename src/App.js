import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Projects from "./components/Projects";
import CreateProject from "./components/CreateProject";
import Project from "./components/Project";

function App() {
  return (
    <div className="app">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/projects">Go to all Projects</Link>
        <Link to="/create-project">Create Project</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/create-project" element={<CreateProject />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
