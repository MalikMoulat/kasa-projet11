import LOGO from '../../assets/LOGO.png'
import '../../styles/index.css'

function Header() {
  return (
      <header className="header">
        <a href='/'>
        <img src={LOGO} className="header-logo" alt="logo" />
        </a>
        <nav>
          <a
            className="App-link"
            href="/"
            
            
          >
            Acceuil
          </a>
          <a
            className="App-link"
            href="/about"

          >
            A propos
          </a>
        </nav>
      </header>
  );
}

export default Header;
