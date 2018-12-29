import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect';
global.fetch = require('jest-fetch-mock');
global.renderWithRouter = renderWithRouter;
global.scrollTo = () => {};

/*
 * Render a component with react-router
 *
 * @param ui - component to render
 * @param * - an object that accepts a custom route and history (defaults to root)
 *
 * @return component wrapped with router
 * @return history - to allow you to reference react-router's history in your test (just try to avoid using
 * this to test implementation details).
 */
function renderWithRouter(
    ui,
    { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {}
) {
    return {
        ...render(<Router history={history}>{ui}</Router>),
        history
    };
}
