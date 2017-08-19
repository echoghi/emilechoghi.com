/**
 * Personal Portfolio 2.0.1
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
import { Router, Route, browserHistory } from 'react-router';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import 'whatwg-fetch';

//Reducers
import { portfolioState, navigationState } from './app/components/reducers';

//components
import Home from './app/components/Home';
import About from './app/components/About';
import Portfolio from './app/components/Portfolio';
import Contact from './app/components/Contact';

const portfolioApp = combineReducers({
    portfolioState,
    navigationState
}); 

export const store = compose(applyMiddleware(thunk))(createStore)(portfolioApp);

ReactDOM.render(
     <Provider store={store}>
        <Router history={browserHistory}>
            <Route path={'/'} component={Home} />
            <Route path={'/about'} component={About} />
            <Route path={'/portfolio'} component={Portfolio} />
            <Route path={'/contact'} component={Contact} />
        </Router>
    </Provider>,
    document.getElementById('app')
);