import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import EmployeeModel from "../../models/Employee.model";
import ProjectModel from "../../models/Project.model";
import { ApiService } from "../../services/ApiService";
import { AddEmployeeToProjectAction, GetProjectAction, GetProjectListAction } from "./types";

export const fetchProjectList: ActionCreator<ThunkAction<Promise<any>, ProjectModel[], null, GetProjectListAction>> = () => {
    return async (dispatch: Dispatch) => {
        const response = await ApiService.get('projects');
        const getProjectListAction: GetProjectListAction = {
            type: 'GET_PROJECT_LIST',
            projects: response.data
        };
        return dispatch(getProjectListAction);
    }
}

export const fetchProject: ActionCreator<ThunkAction<Promise<any>, ProjectModel, null, GetProjectAction>> = (id: number) => {
    return async (dispatch: Dispatch) => {
        const response = await ApiService.get(`projects/${id}`);
        const getProjectAction: GetProjectAction = {
            type: 'GET_PROJECT',
            project: response.data
        }
        return dispatch(getProjectAction);
    }
}

export const addEmployeeToProject: ActionCreator<ThunkAction<
    Promise<any>,
    EmployeeModel,
    null,
    AddEmployeeToProjectAction>> = (id: number, employeeId: number) => {
        return async (dispatch: Dispatch) => {
            const response = await ApiService.post(`projects/${id}/employees/`, {employeeId});
            const addToProjectAction: AddEmployeeToProjectAction = {
                type: 'ADD_EMPLOYEE_TO_PROJECT',
                data: response.data
            }
            return dispatch(addToProjectAction);
        }
    }
