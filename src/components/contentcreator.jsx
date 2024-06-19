


const ContentCreatorCard = ({ name, url, description, imageURL }) => {
    return (
      <div className="content-creator-card">
        {imageURL && <img src={imageURL} alt={`${name}'s avatar`} className="content-creator-image" />}
        <h2>{name}</h2>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">Visit Profile</a>
      </div>
    );
  };


export default ContentCreatorCard