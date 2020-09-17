import React from 'react';
import './Navigation.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Projects from '../../views/Projects-page';
import Employees from '../../views/Employee-page';


export const Navigation = () =>
    <Router>
        <div className="router">
            <nav>
                <ul>
                    <li>
                        <Link to="projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="employees">Employees</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <div className='content-wrapper'>
                    <Route exact path="/projects">
                        <Projects />
                    </Route>
                    <Route exact path="/employees">
                        <Employees />
                    </Route>
                </div>
            </Switch>
        </div>
    </Router>