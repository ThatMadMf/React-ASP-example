import React from "react";
import Select, { } from 'react-select';
import { useDispatch, useSelector } from "react-redux";
import EmployeeModel from "../../models/Employee.model";
import FormUtils from "../../services/FormUtils";
import Option from '../../models/Option.interface'
import { RootState } from "../../store";
import { addEmployeeToProject } from "../../store/projects/actions";

function AddToProjectForm() {
    const employeesList = FormUtils.useOption<EmployeeModel>('employees', (e) => ({ label: `${e.firstName} ${e.lastName}`, value: e.id }));
    const project = useSelector((state: RootState) => state.projectReducer.project);
    const dispatch = useDispatch();


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const employeeId = (employeeSelect.value as Option).value;
        dispatch(addEmployeeToProject(project?.id, employeeId));
    }

    const employeeSelect = FormUtils.useFormSelectField('employeeListId', employeesList);

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add employee to project</h2>
            <Select {...employeeSelect} />
            <button type='submit'>Add contribution</button>
        </form>
    )
}

export default AddToProjectForm;