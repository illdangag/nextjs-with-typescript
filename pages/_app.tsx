import App from 'next/app';
import React from 'react';
import withReduxStore from '../utils/with-redux-store';
import { Provider, } from 'react-redux';
import { ThemeProvider, } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../utils/theme';

type Props = {
  reduxStore: any;
};

class MyApp extends App<Props> {
  render () {
    const { Component, pageProps, reduxStore, } = this.props;
    return (
      <Provider store={reduxStore}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
