import EmployeeModel from "../../models/Employee.model";
import { EmployeeActionType, GET_EMPLOYEE, GET_EMPLOYEE_LIST } from "./types";

interface EmployeesState {
    employeeList: EmployeeModel[],
    employee: EmployeeModel | null
}

const defaultState: EmployeesState = {
    employeeList: [],
    employee: null
}

export function employeeReducer(state= defaultState, action: EmployeeActionType): EmployeesState {
    switch(action.type) {
        case GET_EMPLOYEE_LIST: {

            return {
                ...state,
                employeeList: action.items
            }
        }

        case GET_EMPLOYEE: {

            return {
                ...state,
                employee: action.data
            }
        }

        default:
            return state;
    }
}