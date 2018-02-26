import React from 'react';
import { Route, withRouter } from 'react-router-dom';

// Components
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

class AppIndex extends React.PureComponent {
    render() {
        return (
            <div>
                <NavBar history={this.props} />
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
