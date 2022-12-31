import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/alert.module.css';
import Link from "next/link";
import clsx from 'clsx';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div
          className={clsx({
            [styles.success]: true,
            [styles.error]: false,
            'custom': true
          })}
        ><p >[Your Self Introduction]</p></div>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        Read <Link href="/posts/first-post">this page!</Link>
      </section>
    </Layout>
  );
}