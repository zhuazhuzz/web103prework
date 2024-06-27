import React, { useState, useEffect } from 'react';
import supabase from '../client';
import { useParams, useNavigate } from 'react-router-dom';
import '../style/view.css';

export default function ViewCreator() {
  const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState({
      name: '',
      url: '',
      description: '',
      imageURL: ''
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const { error } = await supabase
          .from('creators')
          .delete()
          .eq('id', id);

        if (error) { throw error }
  
        navigate('/');
        console.log('Creator deleted successfully!');
      } catch (error) {
        console.error('Error adding creator:', error);
      }
    };

    useEffect(() => {
      const fetchCreator = async () => {
        const { data: creator, error } = await supabase
          .from('creators')
          .select('*')
          .eq('id', id)
          .single()
  
        if (error) {
          console.error('Error fetching creator:', error);
        } else {
          setData(creator);
        }
      };
  
      fetchCreator();
    }, [id]);   

    return (
        <div className="container-view">
          <form onSubmit={handleSubmit} className="content-creator-delete">
            <div className="view-creator">
                <h2> {data.name} </h2>
                <ul className='listView'>
                  <li className='imageSide'>
                    {data.imageURL && <img src={data.imageURL} alt={`${data.name}'s avatar`} className="creator-image-view" />}
                  </li>
                  <li className='textSide'>
                    <p> {data.description} </p>
                  <a href={data.url} target="_blank" rel="noopener noreferrer">{data.url}</a>
                  </li>
                </ul>
                <button type="submit">Delete Creator</button>
              
            </div>
          </form>
        </div>
    );

}