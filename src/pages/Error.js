// Components
import {Link} from "react-router-dom"

// Error Page Component
const Error = () => {
    return (
        <>
            <section className="error-page">
                <h1>Error 404 : Page Not Found</h1>
                <a href=""></a>
                <Link className="back-btn" to="/">Back to Home</Link>
            </section>
        </>
    )
}

export default Error
