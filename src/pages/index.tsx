import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import { Footer } from 'src/components/footer';
import { Main } from 'src/components/main';
import { Header } from 'src/components/header';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Main page="index"/>
      <Footer />
    </div>
  )
}