import supabase from "../client.js"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddCreator() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
      try { // See if URL exists already
        const { data: existingCreators, error } = await supabase
        .from('creators')
        .select('*')
        .eq('url', data.url);
      if (error) { throw error }

      if (existingCreators && existingCreators.length > 0) {
        alert('A creator with the same URL already exists. Please use a different URL.');
        return;
      }

      //Otherwise Insert
      const { error: insertError } = await supabase
        .from('creators')
        .insert([
          {
            name: data.name,
            url: data.url,
            description: data.description,
            imageURL: data.imageURL
          }
        ]);

      if (insertError) { throw insertError }

      navigate('/');
      console.log('Creator added successfully!');
    } catch (error) {
      console.error('Error adding creator:', error);
    }
  };

  const handleChange = (e) => {
      const { name, value } = e.target
      setData((prevData) => ({
        ...prevData,
        [name]: value
      }))
  }
  

  return (
    <div className="container">
    <form onSubmit={handleSubmit} className="content-creator-add">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="url"
          placeholder="URL"
          value={data.url}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={data.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="imageURL"
          placeholder="Image URL"
          value={data.imageURL}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Creator</button>
    </form>
    </div>
  );
}