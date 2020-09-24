import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import ProjectModel from "../../models/Project.model";
import { ApiService } from "../../services/ApiService";
import { GetProjectsAction, GET_PROJECTS, ProjectActionTypes } from "./types";

export function getProjects(projects: ProjectModel[]) : ProjectActionTypes {
    return {
        type: GET_PROJECTS,
        projects: projects
    }
}

export const fetchProjects: ActionCreator<ThunkAction<Promise<any>, ProjectModel[], null, GetProjectsAction>> = () => {
    return async (dispatch : Dispatch) => {
        const response = await ApiService.get('projects');
        const getProjectsAction: GetProjectsAction = {
            type: 'GET_PROJECTS',
            projects: response.data
        }
        return dispatch(getProjectsAction)
    }
}
