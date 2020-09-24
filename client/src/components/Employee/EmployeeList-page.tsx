import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { fetchEmployeeList } from "../../store/employees/actions";
import './EmployeeList-page.css'

function EmployeeList() {

    const employeeList = useSelector((state: RootState) => state.employeeReducer.employeeList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEmployeeList())
    }, [])

    if (employeeList.length === 0) {
        return <div>Cant load or find data</div>;
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
