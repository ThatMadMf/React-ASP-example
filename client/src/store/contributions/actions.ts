import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import ContributionDto from "../../components/Contribution/Contribution.dto";
import ContributionModel from "../../models/Contribution.model";
import { ApiService } from "../../services/ApiService";
import { CreateContributionAction, GetContributionAction, GetContributionListAction } from "./types";

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

export const createContribution: ActionCreator<ThunkAction<
    Promise<any>,
    ContributionModel,
    null,
    CreateContributionAction>> = (contributionDto: ContributionDto) => {
        return async (dispatch: Dispatch) => {
            const response = await ApiService.post('contributions', contributionDto);
            const createContributionAction: CreateContributionAction = {
                type: 'CREATE_CONTRIBUTION',
                data: response.data
            };
            return dispatch(createContributionAction);
        }
    }