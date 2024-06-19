import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContentCreatorCard from './components/contentcreator';
import { useRoutes, createBrowserRouter } from 'react-router-dom';
import { ShowCreators } from './pages/ShowCreators';


export default function App() {
  const contentCreators = [
    {
      name: 'John Doe1',
      url: 'https://example.com/johndoe',
      description: 'An experienced content creator specializing in tech reviews.',
      imageURL: 'https://example.com/johndoe.jpg'
    },
    {
      name: 'John Doe2',
      url: 'https://example.com/johndoe',
      description: 'An experienced content creator specializing in tech reviews.',
      imageURL: 'https://example.com/johndoe.jpg'
    },
    {
      name: 'John Doe3',
      url: 'https://example.com/johndoe',
      description: 'An experienced content creator specializing in tech reviews.',
      imageURL: 'https://example.com/johndoe.jpg'
    }
  ];
  
  
  return (
    <>
      <div className="App">
        <h1>Content Creators</h1>
        
      </div>
      <ShowCreators />
    
    </>
  );

}

