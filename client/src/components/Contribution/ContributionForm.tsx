import Axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Select, { ValueType } from 'react-select';
import EmployeeModel from '../Employee/Employee.model';
import ProjectModel from '../Project/Project.model';
import ContributionDto from './Contribution.dto';
import Option from './Option.interface';
import './ContributionForm.css'
import TechnologyModel from '../Technology/Technology.model';

function useOption<T>(name: string, mapper: (item: T) => Option): Option[] {
    const [options, setOptions] = useState<Option[]>([]);

    useEffect(() => {
        Axios.get(`http://localhost:5000/api/${name}`)
            .then((response) => response.data)
            .then((items) => items.map(mapper))
            .then(setOptions);
    }, [])
    return options;
}

function useFormTextField(name: string, init: string) {
    const[value, setValue] = useState(init);
    return {
        value,
        name,
        onChange: (e : React.ChangeEvent<HTMLInputElement>) => {
            return setValue(e.currentTarget.value);
        }
    }
}

function useFormSelectField(name: string, options: Option[]){
    const[value, setValue] = useState<ValueType<Option>>(options[0]);
    return {
        value,
        name,
        options,
        onChange: (o : ValueType<Option>) => {
            return setValue(o);
        }
    }
}

interface ContributionFormProps {
    createContribution: Function;
}

function ContributionForm({createContribution} : ContributionFormProps) {
    const employees = useOption<EmployeeModel>('employees', (e) => ({ label: `${e.firstName} ${e.lastName}`, value: e.id }));
    const projects = useOption<ProjectModel>('projects', (p) => ({ label: p.name, value: p.id }));
    const technologies = useOption<TechnologyModel>('technologies', (t) => ({ label: t.name, value:t.id}))

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const contributionDto = {
            description: descriptionField.value,
            employeeId: (employeeSelect.value as Option).value,
            projectId: (projectSelect.value as Option).value,
            technologyId: (technologySelect.value as Option).value,
        } as ContributionDto;
       createContribution(contributionDto);
    }

    const descriptionField = useFormTextField('description', '');
    const employeeSelect = useFormSelectField('employeeId', employees);
    const projectSelect = useFormSelectField('projectId', projects);
    const technologySelect = useFormSelectField('technologyId', technologies);

    return (        
        <form onSubmit={handleSubmit}>
            <label>Description:</label>
            <input type='text' {...descriptionField}/>
            <label>Contributor</label>
            <Select {...employeeSelect}/>
            <label>Project:</label>
            <Select {...projectSelect} />
            <label>Technology:</label>
            <Select {...technologySelect} />
            <button type='submit'>Add contribution</button>
        </form>
    )
}

export default ContributionForm;