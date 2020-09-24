import ProjectModel from "../../models/Project.model";

export const GET_PROJECT_LIST = 'GET_PROJECT_LIST';

export interface GetProjectListAction {
    type: typeof GET_PROJECT_LIST,
    projects: ProjectModel[]
}

export type ProjectActionTypes = GetProjectListAction;