import styles from './index.scss';
import * as React from 'react';
import Link from 'next/link';
import Layout from '../../components/layout';
import { NextPage, } from 'next';

const IndexPage: NextPage = () => {
  return (
    <Layout title='Home | Next.js + TypeScript Example'>
      <h1 className={styles.title}>Hello Next.js 👋</h1>
      <p>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;