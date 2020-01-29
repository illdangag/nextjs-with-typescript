import React, { useEffect, } from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import { NextPage, } from 'next';
import Clock from '../components/clock';

import { connect, useDispatch, } from 'react-redux';
import { Dispatchable, mapDispatchToProps, } from '../utils/with-redux-store';
import { startClock, } from '../store';

type Props = {};

const IndexPage: NextPage<Dispatchable<Props>> = () => {
  const dispatch = useDispatch();

  let timer: any = null;

  useEffect(() => {
    if (timer !== null) {
      clearInterval(timer);
    }

    timer = startClock(dispatch);
  });

  return (
    <Layout title='Home | Next.js + TypeScript Example'>
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </p>
      <Clock/>
    </Layout>
  );
};

export default connect(null, mapDispatchToProps)(IndexPage);
