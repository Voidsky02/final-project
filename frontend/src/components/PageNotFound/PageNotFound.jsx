import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
    <section>
        <h2>404 - Page not found...</h2>
        <Link to='/'>
            <button>Click here to return to Home</button>
        </Link>
    </section>
    )
}

export default PageNotFound;