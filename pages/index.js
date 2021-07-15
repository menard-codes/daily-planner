// NextJS
import Head from 'next/head'
import Image from 'next/image'

// Styles
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daily Planner</title>
      </Head>
      <div>
        <h1>Daily Planner</h1>
      </div>
    </div>
  )
}
