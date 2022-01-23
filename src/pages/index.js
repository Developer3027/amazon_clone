import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import MainFeed from '../components/MainFeed';

export default function Home({ products }) {
  console.log(products);
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon Clone</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='max-w-screen-2xl mx-auto'>
        <Banner />
        <MainFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  );
  return {
    props: {
      products
    }
  };
}
