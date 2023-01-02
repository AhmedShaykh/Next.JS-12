import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learning Next.JS!</title>
      </Head>

      <h1>THIS IS HOME PAGE</h1>
    </div>
  )
};