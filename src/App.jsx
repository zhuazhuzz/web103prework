import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ContentCreatorCard from './components/contentcreator';
import { Link, useRoutes, createBrowserRouter } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';


export default function App() {
  return (
    <>
      <div className="App">
        <header> 
          <h1> Creatorverse </h1>
          <nav>
            <ul>
              <li>
                <a href="/" role="button"> View All Creators </a>
              </li>
              <li>
                <a href="/add" role="button"> Add A Creator </a>
              </li>
            </ul>
          </nav>
        </header>
        
      </div>
      
    
    </>
  );

}

