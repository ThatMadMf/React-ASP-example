import ContributionModel from "./Contribution.model";

export default interface EmployeeModel{
    id: number;
    firstName: string;
    lastName: string;
    contributions: ContributionModel[];
}