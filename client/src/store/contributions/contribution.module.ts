import ContributionModel from "../../models/Contribution.model";
import { ContributionActionType, GET_CONTRIBUTION, GET_CONTRIBUTION_LIST } from "./types";

interface ContributionsState {
    contributionList: ContributionModel[],
    contribution: ContributionModel | null
}

const defaultState: ContributionsState = {
    contributionList: [],
    contribution: null
}

export function contributionReducer(state = defaultState, action: ContributionActionType): ContributionsState {
    switch (action.type) {
        case GET_CONTRIBUTION_LIST: {

            return {
                ...state,
                contributionList: action.items
            }
        }

        case GET_CONTRIBUTION: {

            return {
                ...state,
                contribution: action.data
            }
        }

        default:
            return state;
    }
}