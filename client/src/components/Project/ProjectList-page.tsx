import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Project } from "./Project";
import ProjectModel from "./Project.model";


function ProjectList() {

    const [error, setError] = useState<any>(null);
    const [projectList, setProjectList] = useState<ProjectModel[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        Axios.get<ProjectModel[]>('http://localhost:5000/api/projects')
            .then(
                (result) => {
                    setIsLoaded(true);
                    setProjectList(result.data);
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
            <div className='project-list'>
                {
                    projectList.map((project) => {
                        return <Project {...project} key={project.id}/>
                    })
                }
            </div>
        );
    }
}

export default ProjectList;
