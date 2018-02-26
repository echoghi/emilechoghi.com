import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveWidth, saveRoute } from './actions';

const mapDispatchToProps = dispatch => ({
    saveBreakPoint: width => dispatch(saveWidth(width)),
    saveRoute: route => dispatch(saveRoute(route))
});

class NavBar extends React.Component {
    state = {
        width: 0,
        menuOpen: false,
        mobile: false
    };

    handleMenu = () => {
        this.setState({ menuOpen: !this.state.menuOpen });
    };

    handleHamburgerClass() {
        let className;

        if (this.state.menuOpen) {
            className = 'hamburger active';
        } else {
            className = 'hamburger';
        }

        return className;
    }

    handleNavClass(name) {
        const { pathname } = this.props.history.location;
        let className;

        if (pathname === `/${name}`) {
            className = 'active';
        } else {
            className = '';
        }

        return className;
    }

    handleMenuClass() {
        let className;

        if (this.state.width < 760) {
            if (this.state.menuOpen) {
                className = 'navbar__menu active';
            } else {
                className = 'navbar__menu collapsed';
            }
        } else {
            className = 'navbar__menu lg';
        }

        return className;
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.props.saveBreakPoint(window.innerWidth);
        this.setState({ width: window.innerWidth });
    };

    render() {
        const { saveRoute } = this.props;
        const { pathname } = this.props.history.location;

        return (
            <div className="navbar">
                <div className="navbar__brand">
                    <Link to="/">
                        <i className="icon-brand" />
                    </Link>
                </div>
                <div className={this.handleHamburgerClass()} onClick={this.handleMenu}>
                    <div />
                    <div />
                    <div />
                </div>
                <ul className={this.handleMenuClass()}>
                    <Link to="/">
                        <li className={this.handleNavClass('')} onClick={() => saveRoute(pathname)}>
                            {' '}
                            Home <i className="icon-home" />
                        </li>
                    </Link>
                    <Link to="/about">
                        <li className={this.handleNavClass('about')} onClick={() => saveRoute(pathname)}>
                            About <i className="icon-user" />
                        </li>
                    </Link>
                    <Link to="/portfolio">
                        <li className={this.handleNavClass('portfolio')} onClick={() => saveRoute(pathname)}>
                            Portfolio <i className="icon-briefcase" />
                        </li>
                    </Link>
                    <Link to="/contact">
                        <li className={this.handleNavClass('contact')} onClick={() => saveRoute(pathname)}>
                            Contact <i className="icon-message-square" />
                        </li>
                    </Link>
                </ul>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(NavBar);
