import EmployeeModel from "../../models/Employee.model";

export const GET_EMPLOYEE_LIST = 'GET_EMPLOYEE_LIST';
export const GET_EMPLOYEE = 'GET_EMPLOYEE';

export interface GetEmployeeListAction {
    type: typeof GET_EMPLOYEE_LIST,
    items: EmployeeModel[]
}

export interface GetEmployeeAction {
    type: typeof GET_EMPLOYEE,
    data: EmployeeModel
}

export type EmployeeActionType = GetEmployeeListAction | GetEmployeeAction;