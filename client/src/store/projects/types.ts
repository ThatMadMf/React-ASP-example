import ProjectModel from "../../models/Project.model";

export const GET_PROJECT_LIST = 'GET_PROJECT_LIST';
export const GET_PROJECT = 'GET_PROJECT';

export interface GetProjectListAction {
    type: typeof GET_PROJECT_LIST,
    projects: ProjectModel[]
}

export interface GetProjectAction {
    type: typeof GET_PROJECT,
    project: ProjectModel
}

export type ProjectActionTypes = GetProjectListAction | GetProjectAction;