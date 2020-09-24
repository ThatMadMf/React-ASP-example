import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import ProjectModel from "../../models/Project.model";
import { RootState } from "../../store";
import { getProjects } from "../../store/projects/actions";
import { GET_PROJECTS } from "../../store/projects/types";
import { Project } from "./Project";


function ProjectList() {

    const projectList = useSelector((state : RootState) => state.projectReducer.projects);
    const dispatch = useDispatch();

    const [error, setError] = useState<any>(null);
    //const [projectList, setProjectList] = useState<ProjectModel[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // useEffect(() => {
    //     Axios.get<ProjectModel[]>('http://localhost:5000/api/projects')
    //         .then(
    //             (result) => {
    //                 setIsLoaded(true);
    //                 setProjectList(result.data);
    //             },
    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             }
    //         )
    // }, [])

    useEffect(() => {
        dispatch(getProjects());
        console.log(projectList);
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
