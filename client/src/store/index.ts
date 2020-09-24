import { type } from "os";
import { combineReducers } from "redux";
import { projectReducer } from "./projects/project.module";

export const rootReducer = combineReducers({
    projectReducer: projectReducer,
})

export type RootState = ReturnType<typeof rootReducer>