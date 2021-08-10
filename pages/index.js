import Head from 'next/head';
import styles from './index.module.css';
// import { connectToDatabase } from '../lib/mongodb';
import { currentEnv } from "../client/config/currentEnv";

console.log(currentEnv);

export async function getServerSideProps(context) {
    
    if(typeof window === 'undefined'){
      return { props: {data: null } };
    }
    return { props: {data: null } };


  //   const res = await fetch(`${currentEnv}/api/cryptoliveprice`);
    
  //   let data;
  //   if(res.status === 200) data = await res.json()
  //   else data = null;

  // if (!data) {
  //   return {
  //     props: { data: null},
  //     notFound: true,
  //   }
  // }

  // DB support
  // const { client } = await connectToDatabase()
  // const isConnected = await client.isConnected()

  return {
    props: {
      data, 
      // isConnected
    },
  }
}

export default function Home({ 
  data, 
  // isConnected
 }) {


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title} align="center">Cryptocurrencies live price tracking...</h1>
        {/* {isConnected && <h3 align="center">"Connected to database"</h3>} */}
        <table className={styles.cryptoTable}>
          <thead>
            <tr>
              <th>Crypto Name</th>
              <th>Code</th>
              <th>Price (INR)</th>
            </tr>
          </thead>
          <tfoot>
            {
              data && data.map((value, key) => {
                return <tr className={styles.cryptoLi} key={key}>
                  <td>{value.name}</td>
                  <td>{value.code}</td>
                  <td>{value.price}</td>
                </tr>
            })
            }
          </tfoot>
        </table>

      </main>
    </div>
  )
}
