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
                        <Link to="Projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="Employees">Employees</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <div className='content-wrapper'>
                    <Route exact path="/Projects">
                        <Projects />
                    </Route>
                    <Route exact path="/Employees">
                        <Employees />
                    </Route>
                </div>
            </Switch>
        </div>
    </Router>