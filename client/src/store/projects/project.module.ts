import ProjectModel from "../../models/Project.model";
import { GET_PROJECT_LIST, ProjectActionTypes } from "./types";

interface ProjectsState {
    projectList: ProjectModel[];
}

const defaultState : ProjectsState = {
    projectList: [],
}

export function projectReducer(
    state = defaultState, 
    action: ProjectActionTypes
    ) : ProjectsState {
        switch(action.type) {
            case GET_PROJECT_LIST: {
                return {
                    ...state,
                    projectList: action.projects
                }
            };
            default:
                return state;
        }
    }