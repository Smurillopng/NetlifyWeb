import React, { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    } else {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="header">
      <nav>
        <h1><a href="home">Sérgio Faria</a></h1>
        <ul className="nav-leftSide-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#games">Games</a>
          </li>
          <li>
            <a href="#art">Art</a>
          </li>
          <li>
            <a href="#code">Code</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ul className="nav-rightSide-links">
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/smurillopng/">
              <img className="socials-svg" src="/images/linkedin_icon.svg" alt="LinkedIn" role="img"></img>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/smurillopng">
              <img className="socials-svg" src="/images/github_icon.svg" alt="GitHub" role="img"></img>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://smurillof.itch.io">
              <img className="socials-svg" src="/images/itch-io_icon.svg" alt="Itch.io" role="img"></img>
            </a>
          </li>
          <li>
            <button onClick={toggleTheme} style={{
              background: 'var(--header-bg)',
              color: 'var(--main-text)',
              border: 'none',
              borderRadius: '20px',
              padding: '0.5rem 1.2rem',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '1rem',
              marginLeft: '1rem',
              boxShadow: '0 2px 8px var(--accent2)'
            }}>
              {theme === 'dark' ? '🌙 Dark' : '🌿 Light'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
