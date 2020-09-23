import Axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Contribution } from "./Contribution";
import ContributionModel from "./Contribution.model";
import ContributionForm from "./ContributionForm";

function ContributionList() {

    const [error, setError] = useState<any>(null);
    const [contributionList, setContributionList] = useState<ContributionModel[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        Axios.get('http://localhost:5000/api/contributions')
            .then(
                (response) => {
                    setIsLoaded(true);
                    setContributionList(response.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <React.Fragment>
                <ContributionForm/>
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