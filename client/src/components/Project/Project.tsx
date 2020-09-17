import React from 'react';
import ProjectModel from './Project.model';
import './Project.css'

export const Project =  ({ id, name }: ProjectModel) =>
    <div className="project">
        <p>{id} {name}</p>
    </div>
