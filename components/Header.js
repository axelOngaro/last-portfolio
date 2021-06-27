import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
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
              <a className={router.pathname == '/about' ? 'active' : ''}>about</a>
            </Link>
          </li>
          <li className="header__nav__list__item">
            <Link href="/skills">
              <a className={router.pathname == '/skills' ? 'active' : ''}>skills</a>
            </Link>
          </li>
          <li className="header__nav__list__item">
            <Link href="/work">
              <a className={router.pathname == '/work' ? 'active' : ''}>work</a>
            </Link>
          </li>
          <li className="header__nav__list__item">
            <Link href="/contact">
              <a className={router.pathname == '/contact' ? 'active' : ''}>contact</a>
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
