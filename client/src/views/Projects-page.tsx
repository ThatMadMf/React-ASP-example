import React, { useEffect, useState } from "react";
import { Project } from "../components/Project/Project";
import ProjectModel from "../components/Project/Project.model";


function Projects() {

    const [error, setError] = useState<any>(null);
    const [projects, setProjects] = useState<ProjectModel[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/api/projects")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setProjects(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className='projects-wrapper'>
                {
                    projects.map((project) => {
                        return <Project id={project.id} name={project.name} />
                    })
                }
            </div>
        );
    }
}

export default Projects;
