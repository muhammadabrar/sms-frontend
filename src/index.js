import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.min.css';
import App from './App';
// import 'antd/dist/antd.variable.min.css';
import { store } from './store/store'
import { Provider } from 'react-redux'
ReactDOM.render(
  <Provider store={store} >
    <App class="app" />
  </Provider>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

