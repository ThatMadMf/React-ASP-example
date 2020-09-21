import EmployeeModel from "../Employee/Employee.model";
import ProjectModel from "../Project/Project.model";
import TechnologyModel from "../Technology/Technology.model";

export default interface ContributionModel {
    id: number;
    description: string;
    startDate: string;
    finishDate: string;
    technology: TechnologyModel;
    employee: EmployeeModel;
    project: ProjectModel;
}