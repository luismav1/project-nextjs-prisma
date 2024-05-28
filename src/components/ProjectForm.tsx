"use client"
import { useRouter } from 'next/navigation'
import {useState} from 'react'

function ProjectForm() {

    const [name, setName] = useState('')
    const router = useRouter()
    return (
        <form 
            onSubmit={async(e) => {
            e.preventDefault();

            const res = await fetch('/api/projects', {
                method: 'POST',
                body: JSON.stringify({name}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await res.json()
           
            
        }}>
            <input 
             type="text" 
             name="title" 
             autoFocus 
             placeholder="Name"
             className="w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none focus:ring focus:ring-blue-600 my-2"
             onChange={(e) => setName(e.target.value)}
            />
            <button 
             type="submit" 
             className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
                Create
             </button>
        </form>
    )

}

export default ProjectForm