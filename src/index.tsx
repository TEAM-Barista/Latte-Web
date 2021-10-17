import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './scss/global.scss';
import reportWebVitals from './reportWebVitals';

import Header from 'src/component/Header';
import Home from 'src/page/Home';
import PostMain from 'src/page/PostMain';
import MyMain from 'src/page/MyMain'
import MyBookmark from 'src/page/MyBookmark'
import Footer from 'src/component/Footer';
import Content from 'src/page/Content';

ReactDOM.render(
  <React.StrictMode>
    <div className="wrap">
      <Content />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
