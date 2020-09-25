import { type } from "os";
import { combineReducers } from "redux";
import { contributionReducer } from "./contributions/contribution.module";
import { employeeReducer } from "./employees/employee.module";
import { projectReducer } from "./projects/project.module";

export const rootReducer = combineReducers({
    projectReducer: projectReducer,
    employeeReducer: employeeReducer,
    contributionReducer: contributionReducer
})

export type RootState = ReturnType<typeof rootReducer>