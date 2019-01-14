import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import NavBar from './Nav';
import Loading from './Loading';
import FourOhFour from './Error/404';
import ErrorBoundary from './Error/ErrorBoundary';
import GlobalStyle from '../theme/GlobalStyle';

const SocialLinks = React.lazy(() => import('./SocialLinks'));

const About = React.lazy(() => import('./About'));

const Portfolio = React.lazy(() => import('./Portfolio'));

const Contact = React.lazy(() => import('./Contact'));

const AppIndex: React.FunctionComponent = () => (
    <BrowserRouter>
        <ErrorBoundary>
            <NavBar />
            <GlobalStyle />

            <React.Suspense fallback={<Loading />}>
                <SocialLinks />

                <Switch>
                    <Route exact path="/" render={() => <About />} name="Home" />
                    <Route path="/portfolio" render={() => <Portfolio />} name="Portfolio" />
                    <Route path="/contact" render={() => <Contact />} name="Contact" />
                    <Route component={FourOhFour} name="404" />
                </Switch>
            </React.Suspense>
        </ErrorBoundary>
    </BrowserRouter>
);

export default AppIndex;
