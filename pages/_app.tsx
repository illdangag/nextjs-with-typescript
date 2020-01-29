import App from 'next/app';
import React from 'react';

import { ThemeProvider, } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../utils/theme';

class MyApp extends App {
  render () {
    const { Component, pageProps, } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
export default MyApp;
