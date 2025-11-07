
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";


function Header() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState(i18n.language || 'en');

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

  const handleLangChange = (e) => {
    const newLang = e.target.value;
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="header">
      <nav>
        <h1><a href="home">{t('header.name')}</a></h1>
        <ul className="nav-leftSide-links">
          <li>
            <a href="#about">{t('header.about')}</a>
          </li>
          <li>
            <a href="#games">{t('header.games')}</a>
          </li>
          <li>
            <a href="#art">{t('header.art')}</a>
          </li>
          <li>
            <a href="#code">{t('header.code')}</a>
          </li>
          <li>
            <a href="#contact">{t('header.contact')}</a>
          </li>
        </ul>
        <ul className="nav-rightSide-links">
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/smurillopng/">
              <img className="socials-svg" src="/images/linkedin_icon.svg" alt="LinkedIn" role="img" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/smurillopng">
              <img className="socials-svg" src="/images/github_icon.svg" alt="GitHub" role="img" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://smurillof.itch.io">
              <img className="socials-svg" src="/images/itch-io_icon.svg" alt="Itch.io" role="img" />
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
              {theme === 'dark' ? t('header.theme_dark') : t('header.theme_light')}
            </button>
          </li>
          <li>
            <select
              value={lang}
              onChange={handleLangChange}
              className="lang-dropdown"
            >
              <option value="en" className="lang-value">EN</option>
              <option value="pt" className="lang-value">PT</option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
