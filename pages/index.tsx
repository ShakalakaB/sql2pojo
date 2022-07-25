import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { SqlParser } from "../components/SqlParser";

const Home: NextPage = () => {
  let inputSchema;
  return (
    <div>
      <Head>
        <title>SQL to Entity</title>
        <meta name="description" content="Convert sql schema to java pojo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <h2 className="text-center my-5">热门活动</h2>
        <SqlParser />
        {/*<SqlParser getterAndSetterIncluded nameType={} sql={}/>*/}
        {/*<SqlParser />*/}
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
