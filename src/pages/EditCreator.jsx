import supabase from "../client.js";
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';



export default function EditCreator() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState({
      name: '',
      url: '',
      description: '',
      imageURL: ''
    });
  
    useEffect(() => {
      const fetchCreator = async () => {
        const { data: creator, error } = await supabase
          .from('creators')
          .select('*')
          .eq('id', id)
          .single()
          .order('id', { ascending: true });
  
        if (error) {
          console.error('Error fetching creator:', error);
        } else {
          setData(creator);
        }
      };
  
      fetchCreator();
    }, [id]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const { error } = await supabase
          .from('creators')
          .update({
            name: data.name,
            url: data.url,
            description: data.description,
            imageURL: data.imageURL
          })
          .eq('id', id);
  
        if (error) {
          throw error;
        }
  
        navigate('/');
        console.log('Creator updated successfully!');
      } catch (error) {
        console.error('Error updating creator:', error);
      }
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
  
    return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
            <h2> Name </h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div>
            <h2> Youtube Link </h2>
          <input
            type="text"
            name="url"
            placeholder="URL"
            value={data.url}
            onChange={handleChange}
          />
        </div>
        <div>
        <h2> Description </h2>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={data.description}
            onChange={handleChange}
          />
        </div>
        <div>
        <h2> Image Link </h2>
          <input
            type="text"
            name="imageURL"
            placeholder="Image URL"
            value={data.imageURL}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Creator</button>
      </form>
    </div>
    );
  }