import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../store";
import { fetchEmployee } from "../../store/employees/actions";
import { Contribution } from "../Contribution/Contribution";

function Employee() {

  const employee = useSelector((state: RootState) => state.employeeReducer.employee);
  const dispatch = useDispatch();
  const { employeeId }: any = useParams();

  useEffect(() => {
    dispatch(fetchEmployee(employeeId));
  }, [])

  return (
    !employee ?
      <p>Cant load employee's data</p> :
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