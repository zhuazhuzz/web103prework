import React from 'react';
import { Link } from 'react-router-dom';
import { Edit, Info, YouTube } from '@mui/icons-material';

export default function ContentCreatorCard({ creator }) {
  
  return (
    <div className="content-creator-card">
      {creator.imageURL && <img src={creator.imageURL} alt={`${creator.name}'s avatar`} className="content-creator-image" />}
      
      <div className="button-container">
        <Link to={`/view/${creator.id}`} className="icon-link">
          <Info fontSize="large" />
        </Link>
        <Link to={`/edit/${creator.id}`} className="icon-link">
          <Edit fontSize="large" />
        </Link>
      </div>

      <h2>{creator.name}</h2>
      <p>{creator.description}</p>
      <Link to={creator.url} target="_blank" rel="noopener noreferrer" className="youtube-link">
      <YouTube fontSize="large" />
      </Link>
     
      
    </div>
  
  );

};