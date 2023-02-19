import Head from 'next/head';
import styles from 'styles/Home.module.css';
import { Footer } from 'src/components/footer';
import { Main } from 'src/components/main';
import { Header } from 'src/components/header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <Main page="about"/>
      <Footer />
    </div>
  )
}
