import Axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Technology from "../Technology/Technology";
import ContributionModel from "./Contribution.model";

function ContributionPage() {

    const [error, setError] = useState<any | null>(null);
    const [contribution, setContribution] = useState<ContributionModel | null>(null);

    const { contributionId }: any = useParams();

    useEffect(() => {
        Axios.get<ContributionModel>(`http://localhost:5000/api/contributions/${contributionId}`)
            .then((response) => {
                setContribution(response.data);
            })
            .catch((response) => {
                setError(response);
            });
    }, [])
    if (!contribution) {
        return <div>No data</div>
    } else {
        const { technology, employee, project } = contribution!;
        return (
            error ?
                <p>{error}</p> :
                <React.Fragment>
                    <h1>Contribution with id {contribution?.id}</h1>
                    <h2>Started at:</h2>
                    <p>{contribution?.startDate}</p>
                    <h2>Finished at:</h2>
                    <p>{contribution?.finishDate}</p>
                    <h2>Description:</h2>
                    <p>{contribution?.description}</p>
                    <Technology {...technology} />
                    <h2>Contributed by:</h2>
                    <Link to={`/employees/${employee.id}`}>{employee.firstName} {employee.lastName}</Link>
                    <h2>Project:</h2>
                    <Link to={`/projects/${project.id}`}>{project.name}</Link>
                </React.Fragment>
        );
    }
}

export default ContributionPage;