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
        .select('*');

      if (error) {
        setError(error.message);
      } else {
        setCreators(data);
      }
      setLoading(false);
    };

    fetchCreators();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="content-creator-grid">
        {creators.map((creator, index) => (
          <ContentCreatorCard
                key={index}
                name={creator.name}
                url={creator.url}
                description={creator.description}
                imageURL={creator.imageURL}
              />
        ))}
     </div>
  );

}

