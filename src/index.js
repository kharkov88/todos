import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './redux/App';
import App2 from './mobx/App';

const app1 = document.getElementById('root-redux');
const app2 = document.getElementById('root-mobx');

ReactDOM.render(<App1 />, app1);
ReactDOM.render(<App2 />, app2);