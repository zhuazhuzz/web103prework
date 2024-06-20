


export default function ContentCreatorCard(creator) {
    return (
      <div className="content-creator-card">
        {creator.imageURL && <img src={creator.imageURL} alt={`${creator.name}'s avatar`} className="content-creator-image" />}
        
        <button> Hello wOWrld </button>

        <h2>{creator.name}</h2>
        <p>{creator.description}</p>
        <a href={creator.url} target="_blank" rel="noopener noreferrer">Visit Profile</a>
      </div>
    );
  };