import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Loading from './components/preloader/preload';
import {  Suspense, lazy } from 'react';
const AppLoad = lazy(() => import('./App'))
  ReactDOM.render(
    <Suspense fallback={ <Loading /> }>
      <AppLoad />
    </Suspense>,
  document.getElementById('root')
);
