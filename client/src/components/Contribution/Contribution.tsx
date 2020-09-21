import React from 'react';
import { Link } from 'react-router-dom';
import ContributionModel from './Contribution.model';
import './Contribution.css'

export const Contribution = ({ id, description, finishDate }: ContributionModel) =>
    <div className="contribution">
        <h3>Description:</h3>
        <p>{description}</p>
        <h3>Date</h3>
        <p>{finishDate}</p>
        <Link to={`/contributions/${id}`}>Details</Link>
    </div>
