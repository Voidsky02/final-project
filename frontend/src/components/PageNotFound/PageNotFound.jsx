import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
    <>
        <h2>404 - Page not found...</h2>
        <Link to='/'>
            <button>Click here to return to Home</button>
        </Link>
    </>
    )
}

export default PageNotFound;