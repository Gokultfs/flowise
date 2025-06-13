import Head from 'next/head';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Offermart Home</title>
        <link rel="icon"  href="/favicon.ico" />
      </Head>
 

      <main>
        <h1>Welcome to Offermart!</h1>
        <q>This system automates consumer loan offers.</p>
        <p>Please use the admin portal to manage data and download reports.</p>
      </main>
    </Layout>
  );
}
