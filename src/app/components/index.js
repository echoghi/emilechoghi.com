import React, { Fragment, Suspense } from 'react';
import { Route } from 'react-router-dom';
// Components
import NavBar from './Nav';
import Loading from './Loading';

const SocialLinks = React.lazy(() => import('./SocialLinks'));

const About = React.lazy(() => import('./About'));

const Portfolio = React.lazy(() => import('./Portfolio'));

const Contact = React.lazy(() => import('./Contact'));

const AppIndex = () => (
    <Fragment>
        <NavBar />
        <Suspense fallback={<Loading />}>
            <SocialLinks />
            <Fragment>
                <Route exact path="/" render={() => <About />} />
                <Route path="/portfolio" render={() => <Portfolio />} name="Portfolio" />
                <Route path="/contact" render={() => <Contact />} name="Contact" />
            </Fragment>
        </Suspense>
    </Fragment>
);

export default AppIndex;
