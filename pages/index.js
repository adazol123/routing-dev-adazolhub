import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <Layout title='Home'>
        <div className={styles.container}>
        Hello!
        </div>
        <div className={styles.container}>
        Hello!
        </div>
      </Layout>
  )
}
