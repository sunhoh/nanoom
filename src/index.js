import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import 'antd/dist/antd.css';
import Router from './Router';
import theme from './styles/theme';
// import { Provider } from 'react-redux';
// import store from './redux/store';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);

{
  /* <Provider store={store}> */
}
