import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews </title>
      </Head>
      <main className={styles.PostContainer}>
        <div className={styles.PostItem}>
          <a href='#'>
            <time>12 de fevereiro de 2021</time>
            <strong>Create a monorepo with Lerna</strong>
            <p>In this guide, you will learn how</p>
          </a>
          <a href='#'>
            <time>12 de fevereiro de 2021</time>
            <strong>Create a monorepo with Lerna</strong>
            <p>In this guide, you will learn how</p>
          </a>
          <a href='#'>
            <time>12 de fevereiro de 2021</time>
            <strong>Create a monorepo with Lerna</strong>
            <p>In this guide, you will learn how</p>
          </a>
        </div>
      </main>
    </>
  );
}
