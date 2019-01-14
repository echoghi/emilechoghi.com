/**
 * Personal Portfolio v2
 * Copyright (c) Emile Choghi 2019
 *
 */
import './app/assets/scss/style.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactGA from 'react-ga';
// components
import AppIndex from './app/components';
// Service Worker
import registerServiceWorker from './registerServiceWorker';

if (NODE_ENV === 'production') {
    ReactGA.initialize(GA_ID);
}

ReactDOM.render(<AppIndex />, document.getElementById('app'));

registerServiceWorker();
