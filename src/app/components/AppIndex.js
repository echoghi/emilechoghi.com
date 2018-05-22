import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

// Components
import NavBar from './NavBar';

function Loading({ error }) {
    if (error) {
        return 'Error! Please refresh the page.';
    } else {
        return <h3>Loading...</h3>;
    }
}

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
