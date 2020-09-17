import React from 'react';
import ProjectModel from './Project.model';
import './Project.css'

export const Project =  ({ id, name }: ProjectModel) =>
    <div className="project">
        <a href={'projects/' + id}>{name}</a>
    </div>
