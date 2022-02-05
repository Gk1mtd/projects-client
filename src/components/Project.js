import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const api = axios.create({ baseURL: "http://localhost:4000/api" });

function Project() {
  const [project, setProject] = React.useState({});
  React.useEffect(() =>{
    getProject()
  }, [])
  async function getProject()  {
    const { data } = await api.get(`/projects/${id}`);
    setProject(data);
  };
  const {id} = useParams()
  return (
    <div>
      <h1>Project</h1>
      <p>Title: {project.title}</p>
      <p>ID: {project._id}</p>
    </div>
  );
}

export default Project;
