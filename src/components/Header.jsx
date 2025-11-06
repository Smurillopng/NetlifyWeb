import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <h1>Sérgio Faria</h1>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;