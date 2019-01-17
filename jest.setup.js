import React from 'react';
import { render } from 'react-testing-library';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect';
import Appindex from './src/app/components/index';
global.fetch = require('jest-fetch-mock');
global.renderApp = renderApp;
global.scrollTo = () => {};

// Render a component with react-router
function renderApp({ route = '/', history = createMemoryHistory({ initialEntries: [route] }) }) {
    return {
        ...render(
            <Router history={history}>
                <Appindex />
            </Router>
        ),
        history
    };
}
