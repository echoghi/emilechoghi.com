/**
 * Personal Portfolio 2.5.0
 * Copyright (c) Emile Choghi 2017
 *
 */

// SCSS
/*eslint-disable*/
import Styles from './app/assets/scss/style.scss';
/*eslint-enable*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import 'whatwg-fetch';
import ReactGA from 'react-ga';
/*eslint-disable*/
import _ from 'lodash';
/*eslint-enable*/

//Reducers
import { portfolioState } from './app/components/reducers';

//components
import AppIndex from './app/components/AppIndex';

// Service Worker
import registerServiceWorker from './registerServiceWorker';

const portfolioApp = combineReducers({
    portfolioState
});

if (NODE_ENV === 'production') {
    ReactGA.initialize('UA-75282883-2');
}

export const store = compose(applyMiddleware(thunk))(createStore)(portfolioApp);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path={'/'} component={AppIndex} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);

registerServiceWorker();
