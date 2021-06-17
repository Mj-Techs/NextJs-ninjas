import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

import Head from "next/head";
const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List | ninjas</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </>
  );
};
export default Ninjas;
