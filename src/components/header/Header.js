import logo from "../../assets/Logo.png";
import "./Header.css";
import Navbar from "../navbar/Navbar";

function Header() {
  return (
    <header className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <Navbar />
    </header>
  );
}

export default Header;
