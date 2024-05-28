import { Project } from "@prisma/client";

function ProjectCard({ project }: {project: Project}) {
    return (
        <div key={project.id} className="bg-slate-400 p-4 my-2">
            <h1>{project.name}</h1>
        </div>
    )
}

export default ProjectCard