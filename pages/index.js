import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="document">
      <Header />
      <p className="title">Coucou perruche</p>
    </div>
  );
}
