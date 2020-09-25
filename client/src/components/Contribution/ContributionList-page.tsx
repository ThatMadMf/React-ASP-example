import Axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Contribution } from "./Contribution";
import ContributionForm from "./ContributionForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { fetchContributionList } from "../../store/contributions/actions";

function ContributionList() {


    const contributionList = useSelector((state: RootState) => state.contributionReducer.contributionList);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchContributionList());
    }, [])

    if (contributionList.length === 0) {
        return <div>Cant load any contributions</div>;
    } else {
        return (
            <React.Fragment>
                <ContributionForm />
                <h1>Contributions:</h1>
                <div>
                    {
                        contributionList.map((c) => {
                            return <Contribution key={c.id} {...c} />
                        })
                    }
                </div>
            </React.Fragment >
        );
    }
}

export default ContributionList;