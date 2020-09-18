import React from 'react';
import ProjectModel from './Project.model';
import './Project.css'
import { Link } from 'react-router-dom';

export const Project =  ({ id, name }: ProjectModel) =>
    <div className="project">
        {
            <Link to={`/projects/${id}`}>{name}</Link>
        }
    </div>
