import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeModel from "../../models/Employee.model";
import { Contribution } from "../Contribution/Contribution";

function Employee() {

  const [error, setError] = useState<any | null>(null);
  const [employee, setEmployee] = useState<EmployeeModel | null>(null);

  const { employeeId }: any = useParams();

  useEffect(() => {
    Axios.get<EmployeeModel>(`http://localhost:5000/api/employees/${employeeId}`)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((response) => {
        setError(response);
      });
  }, [])

  return (
    error ?
      <p>{error}</p> :
      <React.Fragment>
        <h2>{employee?.firstName} {employee?.lastName}</h2>
        <h3>Contributions:</h3>
        <div>
          {
            employee?.contributions.map((c) => {
              return <Contribution {...c} key={c.id} />
            })
          }
        </div>
      </React.Fragment>
  );
}

export default Employee;