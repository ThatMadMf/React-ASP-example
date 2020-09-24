import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import EmployeeModel from "../../models/Employee.model";
import { ApiService } from "../../services/ApiService";
import { GetEmployeeAction, GetEmployeeListAction } from "./types";

export const fetchEmployeeList: ActionCreator<ThunkAction<Promise<any>, EmployeeModel[], null, GetEmployeeListAction>> = () => {
    return async (dispatch: Dispatch) => {
        const response = await ApiService.get('employees');
        const getEmployeeListAction: GetEmployeeListAction = {
            type: 'GET_EMPLOYEE_LIST',
            items: response.data
        };
        return dispatch(getEmployeeListAction);
    }
}

export const fetchEmployee: ActionCreator<ThunkAction<Promise<any>, EmployeeModel, null, GetEmployeeAction>> = (id : number) => {
    return async (dispatch: Dispatch) => {
        const response = await ApiService.get(`employees/${id}`);
        const getEmployeeAction: GetEmployeeAction = {
            type: 'GET_EMPLOYEE',
            data: response.data
        };
        return dispatch(getEmployeeAction);
    }
}