import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import { NextPage, } from 'next';
import { createStyles, makeStyles, Theme, } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
    },
  }),
);

const IndexPage: NextPage = () => {
  const classes = useStyles();

  return (
    <Layout title='Home | Next.js + TypeScript Example'>
      <h1 className={classes.root}>Hello Next.js 👋</h1>
      <p>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </p>
      <Button variant='contained' color='primary'>Hello World</Button>
    </Layout>
  );
};

export default IndexPage;

// import React from 'react';
// import Link from 'next/link';
// import Layout from '../components/layout';

// import { withStyles, } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

// interface Props {
//   classes: any;
// }

// interface State {

// }

// const withStyle = (theme: any) => ({
//   root: {
//     padding: theme.spacing(3, 2),
//   },
// });

// class IndexPage extends React.Component<Props, State> {
//   constructor (props: Props) {
//     super(props);
//   }

//   render () {
//     const { classes, } = this.props;

//     return (
//     <Layout title='Home | Next.js + TypeScript Example'>
//       <h1 className={classes.root}>Hello Next.js 👋</h1>
//       <p>
//         <Link href='/about'>
//           <a>About</a>
//         </Link>
//       </p>
//       <Button variant='contained' color='primary'>Hello World</Button>
//     </Layout>
//     );
//   }
// }

// export default withStyles(withStyle)(IndexPage);
