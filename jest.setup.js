import React from 'react';
import { render } from 'react-testing-library';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect';
global.fetch = require('jest-fetch-mock');
global.renderWithRouter = renderWithRouter;
global.scrollTo = () => {};

// Render a component with react-router
function renderWithRouter(
    ui,
    { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {}
) {
    return {
        ...render(<Router history={history}>{ui}</Router>),
        history
    };
}
