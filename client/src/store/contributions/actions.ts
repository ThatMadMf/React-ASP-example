import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import ContributionModel from "../../models/Contribution.model";
import { ApiService } from "../../services/ApiService";
import { GetContributionAction, GetContributionListAction } from "./types";

export const fetchContributionList: ActionCreator<ThunkAction<Promise<any>, ContributionModel[], null, GetContributionListAction>> = () => {
    return async (dispatch: Dispatch) => {
        const response = await ApiService.get('contributions');
        const getContributionListAction: GetContributionListAction = {
            type: 'GET_CONTRIBUTION_LIST',
            items: response.data
        };
        return dispatch(getContributionListAction);
    }
}

export const fetchContribution: ActionCreator<ThunkAction<Promise<any>, ContributionModel, null, GetContributionAction>> = (id: number) => {
    return async (dispatch: Dispatch) => {
        const response = await ApiService.get(`contributions/${id}`);
        const getContributionAction: GetContributionAction = {
            type: 'GET_CONTRIBUTION',
            data: response.data
        };
        return dispatch(getContributionAction);
    }
}