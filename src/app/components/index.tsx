import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import NavBar from './Nav';
import Loading from './Loading';
import FourOhFour from './Error/404';
import ErrorBoundary from './Error/ErrorBoundary';
import GlobalStyle from '../theme/GlobalStyle';

// no lambda
const SocialLinksImport = () => import('./SocialLinks');
const AboutImport = () => import('./About');
const PortfolioImport = () => import('./Portfolio');

// components
const SocialLinks = React.lazy(SocialLinksImport);

// pages
const About = React.lazy(AboutImport);
const Portfolio = React.lazy(PortfolioImport);

const AppIndex = () => (
    <BrowserRouter>
        <ErrorBoundary>
            <NavBar />
            <GlobalStyle />

            <React.Suspense fallback={<Loading />}>
                <SocialLinks />

                <Switch>
                    <Route exact={true} path="/" component={About} name="Home" />
                    <Route path="/portfolio" component={Portfolio} name="Portfolio" />
                    <Route component={FourOhFour} name="404" />
                </Switch>
            </React.Suspense>
        </ErrorBoundary>
    </BrowserRouter>
);

export default AppIndex;
