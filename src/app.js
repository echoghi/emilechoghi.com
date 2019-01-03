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
//import registerServiceWorker from './registerServiceWorker';

if (NODE_ENV === 'production') {
    ReactGA.initialize('UA-75282883-2');
}

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path={'/'} component={AppIndex} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('app')
);

//registerServiceWorker();
