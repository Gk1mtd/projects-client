import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const api = axios.create({ baseURL: "http://localhost:4000/api" });

function CreateProject() {
  async function createProject(newProjectTitle) {
    const newProject = { title: newProjectTitle };
    await api.post("/projects", newProject);
  }
  // const [newProject, setNewProject] = React.useState({});
  const [success, setSuccess] = useState(false)
  return (
    <div>
      <h1>Create Projects</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          createProject(event.target[0].value);
          setSuccess(true)
        }}
      >
        <label>Title of Project</label>
        <input name="title"></input>
        <button type="Submit">Submit Project</button>
      </form>
      {success && <p>Success</p>}
    </div>
  );
}

export default CreateProject;
