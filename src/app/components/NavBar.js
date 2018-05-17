import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveWidth, saveRoute } from './actions';
import Button from 'material-ui/Button';
import styled from 'styled-components';

const mapDispatchToProps = dispatch => ({
    saveBreakPoint: width => dispatch(saveWidth(width)),
    saveRoute: route => dispatch(saveRoute(route))
});

const Nav = styled.div`
    font-family: 'Varela Round', serif;
    background: #fff;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    width: 100%;
    box-shadow: none;
    border-bottom: 1px solid rgb(219, 219, 219);
    z-index: 99;

    @media (max-width: 1023px) {
        border-bottom: 0;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
    }
`;

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

    onNavigation = pathname => {
        const { saveRoute } = this.props;

        saveRoute(pathname);

        this.setState({ menuOpen: false });
    };

    renderMenuItem(type) {
        const { pathname } = this.props.history.location;

        if (type === 'home') {
            return (
                <Button
                    component={Link}
                    className={this.handleNavClass('')}
                    onClick={() => this.onNavigation(pathname)}
                    to="/"
                >
                    Home <i className="icon-home" />
                </Button>
            );
        } else if (type === 'about') {
            return (
                <Button
                    component={Link}
                    className={this.handleNavClass('about')}
                    onClick={() => this.onNavigation(pathname)}
                    to="/about"
                >
                    About <i className="icon-user" />
                </Button>
            );
        } else if (type === 'portfolio') {
            return (
                <Button
                    component={Link}
                    className={this.handleNavClass('portfolio')}
                    onClick={() => this.onNavigation(pathname)}
                    to="/portfolio"
                >
                    Portfolio <i className="icon-briefcase" />
                </Button>
            );
        } else if (type === 'contact') {
            return (
                <Button
                    component={Link}
                    className={this.handleNavClass('contact')}
                    onClick={() => this.onNavigation(pathname)}
                    to="/contact"
                >
                    Contact <i className="icon-message-square" />
                </Button>
            );
        }
    }

    render() {
        return (
            <Nav className="navbar">
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
                    {this.renderMenuItem('home')}
                    {this.renderMenuItem('about')}
                    {this.renderMenuItem('portfolio')}
                    {this.renderMenuItem('contact')}
                </ul>
            </Nav>
        );
    }
}

export default connect(null, mapDispatchToProps)(NavBar);
