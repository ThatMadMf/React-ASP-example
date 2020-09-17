import React from 'react';
import HeaderModel from './Header.model';
import './Header.css'

export const Header = ({ title, linkText } : HeaderModel) =>
    <header>
        <h2>{title}</h2>
        <a href='/'>{ linkText }</a>
    </header>
