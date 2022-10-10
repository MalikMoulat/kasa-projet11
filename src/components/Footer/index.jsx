import footerlogo from '../../assets/footer-logo.png'
import '../../styles/index.css'

function Footer() {

    // Récupère l'année acutelle
    const date = new Date();
    let year = date.getFullYear();

    return (
        <footer className='footer'>
            <img src={footerlogo} className="header-logo" alt="logo" />
            <p>© {year} Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer