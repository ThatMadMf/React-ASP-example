import Axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProjectModel from "./Project.model";

function Project() {
    const [error, setError] = useState<any | null>(null);
    const [project, setProject] = useState<ProjectModel | null>(null);

    const { projectId }: any = useParams();

    useEffect(() => {
        Axios.get<ProjectModel>(`http://localhost:5000/api/projects/${projectId}`)
            .then((response) => {
                setProject(response.data);
            })
            .catch((response) => {
                setError(response);
            });
    }, [])
    
    if (error) {
        return <div>Error: {error.message}</div>;
    } else {
        const content = project?.employees.length == 0 ?
            <h2>Has no active employees</h2> :
            <div className='employees'>
                <h2>Employees:</h2>
                {
                    project?.employees.map((emp) =>
                        <Link to={`/employees/${emp.id}`}>{emp.firstName} {emp.lastName}</Link>
                    )
                }
            </div>

        return (
            <React.Fragment>
                <h1>{project?.name}</h1>
                {
                    content
                }
            </React.Fragment>
        );
    }
}

export default Project;