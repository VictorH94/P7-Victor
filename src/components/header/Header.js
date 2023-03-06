import logo from '../../assets/Logo.png';
import './Header.css';

function Header() {
  return (
      <header className="Header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
            <li>
                Accueil
            </li>
            <li>
                A propos
            </li>
        </ul>
      </header>
  );
}

export default Header;