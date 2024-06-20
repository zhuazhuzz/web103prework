import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div> 
            404 Not Found
            <br /><br />
            <Link to="/"> Return to HomePage </Link>
        </div>
    )
}