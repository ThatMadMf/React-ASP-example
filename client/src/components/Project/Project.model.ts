import EmployeeModel from "../Employee/Employee.model";

export default interface ProjectModel {
    id: number;
    name: string;
    activeStaff: EmployeeModel[];
}