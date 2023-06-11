import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.main}>
        <Header />
          <Link href="/photos" passHref>
              Go to Images Page
          </Link>
          <Link href="/blogs" passHref>
              Go to Blog Page
          </Link>
          <Link href="/todos" passHref>
              Go to TODO Page
          </Link>
      </main>
    </>
  )
}
