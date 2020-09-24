import ProjectModel from "../../models/Project.model";
import { ApiService } from "../../services/ApiService";
import { GET_PROJECTS, ProjectActionTypes } from "./types";

interface ProjectsState {
    projects: ProjectModel[];
}

const defaultState : ProjectsState = {
    projects: [],
}

export function projectReducer(
    state = defaultState, 
    action: ProjectActionTypes
    ) : ProjectsState {
        switch(action.type) {
            case GET_PROJECTS: {
                return {
                    ...state,
                    projects: action.projects
                }
                
            };
            default:
                return state;
        }
    }