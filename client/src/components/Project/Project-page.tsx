import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "../../store";
import { fetchProject } from "../../store/projects/actions";
import { Contribution } from "../Contribution/Contribution";
import './Project-page.css'

function Project() {
    const project = useSelector((state: RootState) => state.projectReducer.project);
    const dispatch = useDispatch();

    const { projectId }: any = useParams();

    useEffect(() => {
        dispatch(fetchProject(projectId));
    }, [])

    if (!project) {
        return <div>Cant load project data</div>;
    } else {
        return (
            <React.Fragment>
                <h1>{project?.name}</h1>
                {
                    <div>
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