import "./Header.scss";
import logo from "/logo.svg";

export function Header() {
  return (
    <header className="header">
        <figure className="header__logo">
            <img src={ logo } alt="Logo de Kasa" />
        </figure>
        <nav className="header__nav">
          <ul>
            <li>Accueil</li>
            <li>A propos</li>
          </ul>
        </nav>
    </header>
  );
}