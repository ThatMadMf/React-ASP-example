import Axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProjectModel from "../../models/Project.model";
import { Contribution } from "../Contribution/Contribution";
import './Project-page.css'

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
        return (
            <React.Fragment>
                <h1>{project?.name}</h1>
                {
                    <div>
                        <h2>Has no active employees</h2>
                        <div className='employees'>
                            <h2>Employees:</h2>
                            {
                                project?.employees.map((emp) =>
                                    <Link key={emp.id} to={`/employees/${emp.id}`}>{emp.firstName} {emp.lastName}</Link>
                                )
                            }
                        </div>
                        <h2>Contributions:</h2>
                        <div className='contributions'>
                            {
                                project?.contributions.map((c) =>
                                    <Contribution {...c} key={c.id} />
                                )
                            }
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default Project;