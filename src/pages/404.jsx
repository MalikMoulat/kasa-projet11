function ErrorPage(){
    return(
        <div className="error-page">
            <h1 className="error-title">404</h1>
            <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
            <a className="error-home-link" href="/">Retourner sur la page d'accueil</a>
        </div>
    )
}

export default ErrorPage