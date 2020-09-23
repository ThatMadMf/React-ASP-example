import ContributionModel from "../Contribution/Contribution.model";
import Option from "../Contribution/Option.interface";

export default interface EmployeeModel{
    id: number;
    firstName: string;
    lastName: string;
    contributions: ContributionModel[];
}