import React, { } from 'react';
import Select, { } from 'react-select';
import ContributionDto from './Contribution.dto';
import Option from '../../models/Option.interface';
import './ContributionForm.css'
import TechnologyModel from '../../models/Technology.model';
import ProjectModel from '../../models/Project.model';
import EmployeeModel from '../../models/Employee.model';
import { useDispatch } from 'react-redux';
import { createContribution } from '../../store/contributions/actions';
import FormUtils from '../../services/FormUtils';

function ContributionForm() {
    const employees = FormUtils.useOption<EmployeeModel>('employees', (e) => ({ label: `${e.firstName} ${e.lastName}`, value: e.id }));
    const projects = FormUtils.useOption<ProjectModel>('projects', (p) => ({ label: p.name, value: p.id }));
    const technologies = FormUtils.useOption<TechnologyModel>('technologies', (t) => ({ label: t.name, value: t.id }))
    const dispatch = useDispatch()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const contributionDto = {
            description: descriptionField.value,
            employeeId: (employeeSelect.value as Option).value,
            projectId: (projectSelect.value as Option).value,
            technologyId: (technologySelect.value as Option).value,
        } as ContributionDto;
        dispatch(createContribution(contributionDto));
    }

    const descriptionField = FormUtils.useFormTextField('description', '');
    const employeeSelect = FormUtils.useFormSelectField('employeeId', employees);
    const projectSelect = FormUtils.useFormSelectField('projectId', projects);
    const technologySelect = FormUtils.useFormSelectField('technologyId', technologies);

    return (
        <form onSubmit={handleSubmit}>
            <h2>New contribution</h2>
            <label>Description:</label>
            <input type='text' {...descriptionField} />
            <label>Contributor</label>
            <Select {...employeeSelect} />
            <label>Project:</label>
            <Select {...projectSelect} />
            <label>Technology:</label>
            <Select {...technologySelect} />
            <button type='submit'>Add contribution</button>
        </form>
    )
}

export default ContributionForm;