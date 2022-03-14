import Head from "next/head";
import Parse from "parse";
import { useEffect } from "react";

import styles from "../styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    const callParseCloud = async () => {
      try {
        const params = { movie: "The Matrix" };
        const response = await Parse.Cloud.run("hello", params);
        console.log("response", response);
      } catch (e) {
        console.log(JSON.stringify(e));
      }
    };
    callParseCloud();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Parse server !</h1>
      </main>
    </div>
  );
}