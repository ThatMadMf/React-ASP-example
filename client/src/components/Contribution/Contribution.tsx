import React from 'react';
import { Link } from 'react-router-dom';
import ContributionModel from '../../models/Contribution.model';
import './Contribution.css'

export const Contribution = ({ id, description, startDate }: ContributionModel) =>
    <div className="contribution">
        <h3>Description:</h3>
        <p>{description}</p>
        <h3>Date</h3>
        <p>{startDate}</p>
        <Link to={`/contributions/${id}`}>Details</Link>
    </div>
