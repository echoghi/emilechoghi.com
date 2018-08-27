/**
 * Personal Portfolio 2.8.0
 * Copyright (c) Emile Choghi 2018
 *
 */

// SCSS
/*eslint-disable*/
import Styles from './app/assets/scss/style.scss';
/*eslint-enable*/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'whatwg-fetch';
import ReactGA from 'react-ga';

//components
import AppIndex from './app/components/AppIndex';

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
