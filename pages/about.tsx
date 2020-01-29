import * as React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';

const AboutPage: React.FunctionComponent = () => (
  <Layout title='About | Next.js + TypeScript Example'>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href='/'>
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;