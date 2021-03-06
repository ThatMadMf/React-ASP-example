import ProjectModel from "../../models/Project.model";
import { ADD_EMPLOYEE_TO_PROJECT, GET_PROJECT, GET_PROJECT_LIST, ProjectActionTypes } from "./types";

interface ProjectsState {
    projectList: ProjectModel[];
    project: ProjectModel | null;
}

const defaultState: ProjectsState = {
    projectList: [],
    project: null
}

export function projectReducer(state = defaultState, action: ProjectActionTypes): ProjectsState {
    switch (action.type) {
        case GET_PROJECT_LIST: {

            return {
                ...state,
                projectList: action.projects
            }
        }
        case GET_PROJECT: {
            
            return {
                ...state,
                project: action.project
            }
        }

        case ADD_EMPLOYEE_TO_PROJECT: {

            return {
                ...state,
                project: {
                    ...state.project!,
                    employees: [
                        ...state.project?.employees!,
                        action.data
                    ]
                }
            }
        }

        default:
            return state;
    }
}