import ContributionModel from "./Contribution.model";
import EmployeeModel from "./Employee.model";

export default interface ProjectModel {
    id: number;
    name: string;
    employees: EmployeeModel[];
    contributions: ContributionModel[];
}