import Head from 'next/head';
import Header from '../components/Header';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="document">
      <Header />
      <main className="home__main">
        <motion.div
          className="home__text"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        >
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
        </motion.div>
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
