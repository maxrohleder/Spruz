import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spruz</title>
        <meta name="description" content="Spruz - die original bayrische Bar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Willkommen im <a href="https://spruz.de">Spruz</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        Powered by
        <a
          href="https://maxrohleder.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          Max
        </a>
        and
        <a
          href="https://tobiasgutmann.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tobi
        </a>
      </footer>
    </div>
  )
}

export default Home
