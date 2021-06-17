import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        lorem ipsum salum odum dstwa sdknik sqdjhu wndwdhs qsojqosjn wjdniwd
        wswin lorem ipsum salum odum dstwa sdknik sqdjhu wndwdhs qsojqosjn
        wjdniwd wswin lorem ipsum salum odum dstwa sdknik sqdjhu wndwdhs
        qsojqosjn wjdniwd wswin
      </p>
      <p className={styles.text}>
        lorem ipsum salum odum dstwa sdknik sqdjhu wndwdhs qsojqosjn wjdniwd
        wswin lorem ipsum salum odum dstwa sdknik sqdjhu wndwdhs qsojqosjn
        wjdniwd wswin lorem ipsum salum odum dstwa sdknik sqdjhu wndwdhs
        qsojqosjn wjdniwd wswin
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </>
  );
}
