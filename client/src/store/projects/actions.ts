import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import ProjectModel from "../../models/Project.model";
import { ApiService } from "../../services/ApiService";
import { GetProjectListAction, GET_PROJECT_LIST, ProjectActionTypes } from "./types";

export function getProjects(projects: ProjectModel[]) : ProjectActionTypes {
    return {
        type: GET_PROJECT_LIST,
        projects: projects
    }
}

export const fetchProjects: ActionCreator<ThunkAction<Promise<any>, ProjectModel[], null, GetProjectListAction>> = () => {
    return async (dispatch : Dispatch) => {
        const response = await ApiService.get('projects');
        const getProjectsAction: GetProjectListAction = {
            type: 'GET_PROJECT_LIST',
            projects: response.data
        }
        return dispatch(getProjectsAction)
    }
}
