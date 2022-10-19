import LOGO from '../../assets/LOGO.png'
import '../../styles/index.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
      <header className="header">
        <Link to='/'>
          <img src={LOGO} className="header-logo" alt="logo" />
        </Link>
        <nav>
          <Link className="App-link" to="/">Acceuil</Link>
          <Link className="App-link" to="/about">À propos</Link>
        </nav>
      </header>
  );
}

export default Header;
