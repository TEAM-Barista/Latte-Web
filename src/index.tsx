import React from 'react';
import ReactDOM from 'react-dom';
import './scss/global.scss';
import reportWebVitals from './reportWebVitals';
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
