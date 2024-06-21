import React, { useState, useEffect } from 'react';
import supabase from '../client';
import { useParams } from 'react-router-dom';

export default function ViewCreator() {
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
  
        if (error) {
          console.error('Error fetching creator:', error);
        } else {
          setData(creator);
        }
      };
  
      fetchCreator();
    }, [id]);   

    return (
        <div className="container">
            <div className="view-creator">
                <h1>Viewing Creator</h1>
                <h2>Name: {data.name}</h2>
                <p>URL: <a href={data.url} target="_blank" rel="noopener noreferrer">{data.url}</a></p>
            </div>
        </div>
    );

}