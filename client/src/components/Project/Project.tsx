import React from 'react';
import './Project.css'
import { Link } from 'react-router-dom';
import ProjectModel from '../../models/Project.model';

export const Project = ({ id, name }: ProjectModel) =>
    <div className="project">
        <Link to={`/projects/${id}`}>{name}</Link>
    </div>
