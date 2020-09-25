import ContributionModel from "../../models/Contribution.model";

export const GET_CONTRIBUTION_LIST = 'GET_CONTRIBUTION_LIST';
export const GET_CONTRIBUTION = 'GET_CONTRIBUTION';
export const CREATE_CONTRIBUTION = 'CREATE_CONTRIBUTION';

export interface GetContributionListAction {
    type: typeof GET_CONTRIBUTION_LIST,
    items: ContributionModel[]
}

export interface GetContributionAction {
    type: typeof GET_CONTRIBUTION,
    data: ContributionModel
}

export interface CreateContributionAction {
    type: typeof CREATE_CONTRIBUTION,
    data: ContributionModel
}

export type ContributionActionType = GetContributionListAction | GetContributionAction | CreateContributionAction;
