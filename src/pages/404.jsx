import {Link} from 'react-router-dom'

function ErrorPage(){
    return(
        <div className="error-page">
            <h1 className="error-title">404</h1>
            <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
            <Link className="error-home-link" to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default ErrorPage