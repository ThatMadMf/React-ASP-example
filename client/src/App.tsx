import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';


function App() {
  return (
    <div className="App">
      <Header title='Company projects' linkText='Go Home' />
        <Navigation />
      <Header title='Company projects' linkText='Go Home' />
    </div>
  );
}

export default App;
