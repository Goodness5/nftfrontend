import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Nft Dapp</title>
        <meta
          content="Created by Goodness"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className="">
        <ConnectButton />

    </div>
  );
};

export default Home;
