import Head from 'next/head';
import Header from '../components/Header';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="document">
      <Header />
      <main className="home__main">
        <div className="home__text">
          <p className="home__text__intro">
            Creative and Technical skills to solve your problems
          </p>
          <p className="home__text__presentation">
            Designer and developer, based in Toulouse, France.
          </p>
          <Link href="/contact">
            <a>
              <button className="home__button">HIRE ME</button>
            </a>
          </Link>
        </div>
        <div className="home__illustration">
          <Image
            src="/undraw_Operating_system_re_iqsc.svg"
            height={430}
            width={450}
            layout="responsive"
          />
        </div>
      </main>
    </div>
  );
}
