import { GET_PROJECTS, ProjectActionTypes } from "./types";

export function getProjects() : ProjectActionTypes {
    return {
        type: GET_PROJECTS
    }
}