import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Helmet } from 'react-helmet';
import Loading from './Loading';

// Components
import NavBar from './NavBar';

const Loader = ({ error }) => {
    if (error) {
        return 'Error! Please refresh the page.';
    } else {
        return <Loading />;
    }
};

const SocialLinks = Loadable({
    loader: () => import('./SocialLinks'),
    loading: Loader
});

const Home = Loadable({
    loader: () => import('./Home'),
    loading: Loader
});

const About = Loadable({
    loader: () => import('./About'),
    loading: Loader
});

const Portfolio = Loadable({
    loader: () => import('./Portfolio'),
    loading: Loader
});

const Contact = Loadable({
    loader: () => import('./Contact'),
    loading: Loader
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
