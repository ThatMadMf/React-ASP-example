import React from 'react';
import NavigationModel from './Navigation.model';
import './Navigation.css'

export const Navigation = ({ title, items }: NavigationModel) =>
    <nav>
        <h2>{title}</h2>
        {
            items.map((item) => {
                return <a href={item.link}> {item.text} </a>
            })
        }
    </nav>