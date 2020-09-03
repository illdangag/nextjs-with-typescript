import React, { useEffect, } from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import { NextPage, } from 'next';
import Clock from '../components/clock';

import { connect, useDispatch, } from 'react-redux';
import { Dispatchable, mapDispatchToProps, } from '../utils/with-redux-store';
import { startClock, } from '../store';

import { createStyles, makeStyles, Theme, } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
    },
  }),
);

type Props = {};

const IndexPage: NextPage<Dispatchable<Props>> = () => {
  const classes = useStyles();

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
      <h1 className={classes.root}>Hello Next.js 👋</h1>
      <p>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </p>
      <Button variant='contained' color='primary'>Hello World</Button>
      <Clock/>
    </Layout>
  );
};

export default connect(null, mapDispatchToProps)(IndexPage);
