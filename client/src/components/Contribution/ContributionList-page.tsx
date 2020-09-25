import Axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Contribution } from "./Contribution";
import ContributionDto from "./Contribution.dto";
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

    // function createContribution(contribution: ContributionDto) {
    //     Axios.post('http://localhost:5000/api/contributions', contribution)
    //         .then((response) => setContributionList([...contributionList, response.data]))
    // }

    if (contributionList.length === 0) {
        return <div>Cant load any contributions</div>;
    } else {
        return (
            <React.Fragment>
                {/* <ContributionForm createContribution={createContribution} /> */}
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