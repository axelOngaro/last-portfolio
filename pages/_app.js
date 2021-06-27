import '../styles/globals.css';
import '../styles/styles.css';
import { motion } from 'framer-motion';
import Header from '../components/Header';

function MyApp({ Component, pageProps, router }) {
  return (
    <div>
      <Header />
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        transition={{ duration: 0.3 }}
        variants={{
          pageInitial: {
            scale: 0.8,
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
            scale: 1,
          },
          pageExit: {
            opacity: 0,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </div>
  );
}

export default MyApp;
