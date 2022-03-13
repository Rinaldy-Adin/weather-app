import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './themes/GlobalStyles';
import Theme from './themes/Theme';
import { ThemeProvider } from 'styled-components';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={Theme}>
            <GlobalStyle></GlobalStyle>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
