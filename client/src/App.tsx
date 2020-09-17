import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';
import NavigationModel from './components/Navigation/Navigation.model';
import { Project } from './components/Project/Project';
import ProjectModel from './components/Project/Project.model';

function App() {

  const [error, setError] = useState<any>(null);
  const [projects, setProjects] = useState<ProjectModel[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const navigation: NavigationModel = {
    title: 'Navigation',
    items: []
  }

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProjects(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <Header title='Company projects' linkText='Go Home' />
        <div className='content-wrapper'>
          <Navigation title={navigation.title} items={navigation.items} />
          <div className='projects-wrapper'>
            {
              projects.map((project) => {
                return <Project id={project.id} name={project.name} />
              })
            }
          </div>
        </div>
        <Header title='Company projects' linkText='Go Home' />
      </div>
    );
  }
}

export default App;
