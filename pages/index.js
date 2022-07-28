import Head from 'next/head';

import Banner from '../components/banner/banner';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextflix</title>
        <meta name="description" content="A Netflix clone build with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Nextflix</h1>

      {/*<NavBar />*/}
      <Banner
        title="Clifford the red dog"
        subTitle="A very cute dog"
        imgUrl="/static/clifford.webp"
      />
      {/*<Card />*/}
    </div>
  );
}
