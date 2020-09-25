import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Technology from "../Technology/Technology";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { fetchContribution } from "../../store/contributions/actions";

function ContributionPage() {

    const contribution = useSelector((state: RootState) => state.contributionReducer.contribution);
    const dispatch = useDispatch();
    const { contributionId }: any = useParams()

    useEffect(() => {
        dispatch(fetchContribution(contributionId))
    }, [])
    if (!contribution) {
        return <div>No data</div>
    } else {
        const { technology, employee, project } = contribution!;
        return (
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