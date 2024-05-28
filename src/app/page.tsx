import ProjectForm from "@/components/ProjectForm";

async function loadProjects() {
  const res = await fetch('http://localhost:3000/api/projects');
  const data = await res.json();
  console.log(data);
  return data
}
async function HomePage(){
  const project = await loadProjects();
  return (
    <div className="flex items-center justify-center h-screen">
      <div>

      <h1 style={{ color: 'white', fontSize: '2em', fontWeight: 'bold' }}>Project registration</h1>
      <ProjectForm />
      {project.map((project) => (
        <div key={project.id} className="bg-slate-400 p-4 my-2">
          <h1>{project.name}</h1>
        </div>
      ))}</div>
    </div>
  )
}

export default HomePage;