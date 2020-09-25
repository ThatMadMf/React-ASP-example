import React from 'react';
import './App.css';
import { Footer } from './components/Navigation/Footer';
import { Header } from './components/Navigation/Header';
import { Navigation } from './components/Navigation/Navigation';


function App() {
  return (
    <div className="App">
      <Header title='Company projects' linkText='Go Home' />
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
