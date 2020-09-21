import ContributionModel from "../Contribution/Contribution.model";
import EmployeeModel from "../Employee/Employee.model";

export default interface ProjectModel {
    id: number;
    name: string;
    employees: EmployeeModel[];
    contributions: ContributionModel[];
}