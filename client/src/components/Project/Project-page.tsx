import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectModel from "./Project.model";

function Project() {
    const [error, setError] = useState<any | null>(null);
    const [project, setProject] = useState<ProjectModel | null>(null);

    const { projectId }: any = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/api/projects/${projectId}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setProject(result);
                },
                (error) => {
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else {
        return (
            <React.Fragment>
                <h1>{project?.name}</h1>
                <div className='employees'>
                    <h2>Employees:</h2>
                    {
                        project?.activeStaff.map((employee) =>
                            <p>{employee.firstName} {employee.secondName}</p>
                        )
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default Project;