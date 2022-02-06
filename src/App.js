import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Projects from "./components/Projects";
import CreateProject from "./components/CreateProject";
import Project from "./components/Project";
import React from "react";

export const ThemeContext = React.createContext();
export const UserContext = React.createContext();

function App() {
  const [theme, setTheme] = React.useState(false);
  const [user, setUser] = React.useState({ name: "Peter" });
  return (
    <div className={theme ? "bright" : "dark"}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/projects">Go to all Projects</Link>
        <Link to="/create-project">Create Project</Link>
      </nav>
      <button
        onClick={() => {
          setTheme(!theme);
        }}
      >
        Toggle theme
      </button>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/create-project" element={<CreateProject />} />
            <Route path="/project/:id" element={<Project />} />
          </Routes>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
