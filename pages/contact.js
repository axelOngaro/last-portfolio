import Header from '../components/Header';

export default function Contact() {
  return (
    <div className="document contact__page">
      <Header />
      <main className="contact__main">
        <p className="contact__mail">axel.ongaro.pro@gmail.com</p>
        <ul className="contact__list">
          <a href="https://www.google.com" target="_blank">
            <li className="contact__list__item">GITHUB</li>
          </a>
          <a href="https://www.google.com" target="_blank">
            <li className="contact__list__item">LINKEDIN</li>
          </a>
          <a href="https://www.google.com" target="_blank">
            <li className="contact__list__item">TWITTER</li>
          </a>
          <a href="https://www.google.com" target="_blank">
            <li className="contact__list__item">MEDIUM</li>
          </a>
        </ul>
      </main>
    </div>
  );
}
