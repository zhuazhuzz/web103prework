import supabase from '../client.js';
import ContentCreatorCard from '../components/contentcreator.jsx';
import React, { useEffect, useState } from 'react';


export default function ShowCreators() {

  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCreators = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .order('id', { ascending: true });

      if (error) {
        setError(error.message);
      } else {
        setCreators(data);
      }
      setLoading(false);
    };

    fetchCreators();
  }, []);


  return creators.length === 0 ? <h1> </h1> : (
    <div className="content-creator-grid">
        { creators.map((creator, index) => (
          <ContentCreatorCard
                key={index}
                creator={creator}
          />
        ))}
     </div>
  );

}

