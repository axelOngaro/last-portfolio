import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <a>
          <p>axel ongaro</p>
        </a>
      </Link>

      <nav className="header__nav">
        <ul className="header__nav__list">
          <li className="header__nav__list__item">
            <Link href="/about">
              <a>about</a>
            </Link>
          </li>
          <li className="header__nav__list__item">
            <Link href="/skills">
              <a>skills</a>
            </Link>
          </li>
          <li className="header__nav__list__item">
            <Link href="/work">
              <a>work</a>
            </Link>
          </li>
          <li className="header__nav__list__item">
            <Link href="/contact">
              <a>contact</a>
            </Link>
          </li>
        </ul>
        <a href="http://www.google.com" target="_blank" className="blog__link">
          blog
        </a>
      </nav>
    </header>
  );
}
