
import ContentCreatorCard from './components/contentcreator';

export function ShowCreators() {
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
    ]
    
    
    return (
        <div className="content-creator-grid">
            {contentCreators.map((creator, index) => (
              <ContentCreatorCard
                key={index}
                name={creator.name}
                url={creator.url}
                description={creator.description}
                imageURL={creator.imageURL}
              />
            ))}
        </div>
    )

}

