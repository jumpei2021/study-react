import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Footer } from '../components/footter';
import { Main } from '../components/main';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main page="about"/>
      <Footer />
    </div>
  )
}
