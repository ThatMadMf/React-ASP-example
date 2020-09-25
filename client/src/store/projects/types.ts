import EmployeeModel from "../../models/Employee.model";
import ProjectModel from "../../models/Project.model";

export const GET_PROJECT_LIST = 'GET_PROJECT_LIST';
export const GET_PROJECT = 'GET_PROJECT';
export const ADD_EMPLOYEE_TO_PROJECT = 'ADD_EMPLOYEE_TO_PROJECT';

export interface GetProjectListAction {
    type: typeof GET_PROJECT_LIST,
    projects: ProjectModel[]
}

export interface GetProjectAction {
    type: typeof GET_PROJECT,
    project: ProjectModel
}

export interface AddEmployeeToProjectAction {
    type: typeof ADD_EMPLOYEE_TO_PROJECT,
    data: EmployeeModel
}

export type ProjectActionTypes = GetProjectListAction | GetProjectAction | AddEmployeeToProjectAction;