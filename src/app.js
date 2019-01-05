/**
 * Personal Portfolio v2
 * Copyright (c) Emile Choghi 2018
 *
 */
import './app/assets/scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';

// components
import AppIndex from './app/components';

// Service Worker
import registerServiceWorker from './registerServiceWorker';

if (NODE_ENV === 'production') {
    ReactGA.initialize(GA_ID);
}

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" render={() => <AppIndex />} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('app')
);

registerServiceWorker();
