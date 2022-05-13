import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import './styles/index.scss';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter >
    <AppRouter />
  </BrowserRouter>
);