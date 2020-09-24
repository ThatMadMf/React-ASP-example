import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeModel from "../../models/Employee.model";
import './EmployeeList-page.css'

function EmployeeList() {

    const [error, setError] = useState<any>(null);
    const [employeeList, setEmployeeList] = useState<EmployeeModel[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        Axios.get('http://localhost:5000/api/employees')
            .then(
                (response) => {
                    setIsLoaded(true);
                    setEmployeeList(response.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <React.Fragment>
                <h1>Employees:</h1>
                <div className='employee-list'>
                    {
                        employeeList.map((emp) => {
                            return (
                                <div key={emp.id} className='employee'>
                                    <Link to={`/employees/${emp.id}`}>{emp.firstName} {emp.lastName}</Link>
                                </div>
                            )
                        })
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default EmployeeList;
