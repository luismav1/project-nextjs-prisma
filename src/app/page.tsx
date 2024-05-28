"use client"
import ProjectForm from "@/components/ProjectForm";
import ProjectCard from "@/components/ProjectCard";
import { useContext, useEffect } from "react";
import { ProjectContext } from "@/context/ProjectContext";

function HomePage(){

  const {projects, loadProjects} = useContext(ProjectContext)
  console.log(projects)

  useEffect(() => {
    loadProjects()
  }, [])

  return (
    <div className="flex items-center justify-center h-screen">
      <div>

      <h1 style={{ color: 'white', fontSize: '2em', fontWeight: 'bold' }}>Project registration</h1>
      <ProjectForm />
      {projects.map((project) => (
        <div key={project.id} className="bg-slate-400 p-4 my-2">
          <h1>{project.name}</h1>
        </div>
      ))}</div>
    </div>
  )
}

export default HomePage;