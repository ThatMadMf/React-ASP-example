import ContributionModel from "../Contribution/Contribution.model";

export default interface EmployeeModel {
    id: number;
    firstName: string;
    lastName: string;
    contributions: ContributionModel[];
}