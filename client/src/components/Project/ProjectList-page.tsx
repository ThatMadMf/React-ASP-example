import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { fetchProjects, getProjects } from "../../store/projects/actions";
import { Project } from "./Project";


function ProjectList() {

    const projectList = useSelector((state : RootState) => state.projectReducer.projects);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProjects());
    }, [])

    if (projectList.length == 0) {
        return <div>No projects here yet</div>;
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
