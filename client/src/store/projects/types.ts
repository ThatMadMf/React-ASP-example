import ProjectModel from "../../models/Project.model";

export const GET_PROJECTS = 'GET_PROJECTS';

export interface GetProjectsAction {
    type: typeof GET_PROJECTS,
    projects: ProjectModel[]
} 

export type ProjectActionTypes = GetProjectsAction;