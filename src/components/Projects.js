import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { ThemeContext } from "../App";

const api = axios.create({ baseURL: "http://localhost:4000/api" });

function Projects() {
  async function getProjects() {
    const { data } = await api.get("/projects");
    setProjects(data);
  }
  const [projects, setProjects] = React.useState([]);
  React.useEffect(() => {
    getProjects();
  }, []);

  const {theme, setTheme} = React.useContext(ThemeContext);

  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project) => {
        return (
          <div key={project.title}>
            <p>Title: {project.title}</p>
            <p>Tasks: {project._id}</p>
            <Link to={`/project/${project._id}`}>Details</Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
