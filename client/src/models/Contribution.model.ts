import ProjectModel from "./Project.model";
import EmployeeModel from "./Employee.model";
import TechnologyModel from "./Technology.model";

export default interface ContributionModel {
    id: number;
    description: string;
    startDate: string;
    finishDate: string;
    technology: TechnologyModel;
    employee: EmployeeModel;
    project: ProjectModel;
}