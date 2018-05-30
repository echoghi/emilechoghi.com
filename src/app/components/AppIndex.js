import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Helmet } from 'react-helmet';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

// Components
import NavBar from './NavBar';

const LoadingWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
`;

const Loading = ({ error }) => {
    if (error) {
        return 'Error! Please refresh the page.';
    } else {
        return (
            <LoadingWrapper>
                <CircularProgress size={75} style={{ color: '#269bda', margin: '0 auto' }} />
            </LoadingWrapper>
        );
    }
};

const SocialLinks = Loadable({
    loader: () => import('./SocialLinks'),
    loading: Loading
});

const Home = Loadable({
    loader: () => import('./Home'),
    loading: Loading
});

const About = Loadable({
    loader: () => import('./About'),
    loading: Loading
});

const Portfolio = Loadable({
    loader: () => import('./Portfolio'),
    loading: Loading
});

const Contact = Loadable({
    loader: () => import('./Contact'),
    loading: Loading
});

class AppIndex extends React.PureComponent {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Emile Choghi</title>

                    <meta charSet="UTF-8" />
                    <link rel="canonical" href="https://emilechoghi.com" />
                    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
                    <meta httpEquiv="Cache-control" content="public" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="Description" content="The personal portfolio website of Emile Choghi." />
                    <meta name="theme-color" content="#ffffff" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="stylesheet" href="/styles.css" />
                    <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" />
                </Helmet>
                <NavBar history={this.props} />
                <SocialLinks />
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} name="About" />
                    <Route path="/portfolio" component={Portfolio} name="Portfolio" />
                    <Route path="/contact" component={Contact} name="Contact" />
                </div>
            </div>
        );
    }
}

export default withRouter(AppIndex);
