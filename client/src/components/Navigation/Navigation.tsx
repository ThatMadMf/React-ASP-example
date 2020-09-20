import React from 'react';
import './Navigation.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ProjectList from '../Project/ProjectList-page';
import Employee from '../Employee/Employee-page';
import Project from '../Project/Project-page';
import EmployeeList from '../Employee/EmployeeList';


export const Navigation = () =>
    <Router>
        <div className="router">
            <nav>
                <ul>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/employees">Employees</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <div className='content-wrapper'>
                    <Route exact path='/projects'>
                        <ProjectList />
                    </Route>
                    <Route exact path='/employees'>
                        <EmployeeList />
                    </Route>
                    <Route exact path='/employees/:employeeId'>
                        <Employee />
                    </Route>
                    <Route path='/projects/:projectId'>
                        <Project />
                    </Route>
                </div>
            </Switch>
        </div>
    </Router>