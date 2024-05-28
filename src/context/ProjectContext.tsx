"use client";
import { CreateProject } from '@/interfaces/Project';
// import { createContext, useState } from 'react'

// export const ProjectContext = createContext<{
//     projects: any[];
//     loadProjects: () => Promise<void>;
// }>({
//     projects: [],
//     loadProjects: async () => {}
// });

// export const ProjectProvider = ({children}: {children: React.ReactNode}) => {
//     const [projects, setProjects] = useState<any[]>([])

// async function loadProjects() {
//   const res = await fetch('/api/projects')
//   const data = await res.json()
//   setProjects(data)
//   return data;
// }

// async function createProject(project:{
//     name: string;

// }){
// {
//     const res = await fetch('/api/projects', {
//         method: 'POST',
//         body: JSON.stringify({project}),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     const newProject = await res.json();
//     setProjects([...projects, newProject])
// }
//     return (
//         <ProjectContext.Provider value={{projects, loadProjects}}>
//             {children}
//         </ProjectContext.Provider>
//     )
// } 
// }

import { createContext, useState } from 'react'
export const ProjectContext = createContext<{
    projects: any[];
    loadProjects: () => Promise<void>;
    createProject: (project: CreateProject) => void;
}
>({
    projects: [],
    loadProjects: async () => { },
    createProject: async (project: CreateProject) => { }
})

export const ProjectProvider = ({ children }: { children: React.ReactNode }) => {
    const [projects, setProjects] = useState<any[]>([])

    async function loadProjects() {
        const res = await fetch('/api/projects');
        const data = await res.json();
        setProjects(data);
        return data
    }

    async function createProject(project: CreateProject){
        const res = await fetch('/api/projects', {
            method: 'POST',
            body: JSON.stringify({project}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const newProject = await res.json();
        setProjects([...projects, newProject])

    }
    return <ProjectContext.Provider value={{ projects, loadProjects, createProject }}>{children}
    </ProjectContext.Provider>
}