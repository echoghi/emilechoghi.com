import React from 'react';
import { connect } from 'react-redux';
import { handleNav } from './actions';

const mapStateToProps = state => ({
    data: state.portfolioState.data,
    home: state.navigationState.home,
    about: state.navigationState.about,
    portfolio: state.navigationState.portfolio,
    contact: state.navigationState.contact
});

const mapDispatchToProps = dispatch => ({
    handleNav: page => dispatch(handleNav(page))
});

class NavBar extends React.Component {
	constructor() {
		super();

		this.state = {
			width   : 0,
      		menuOpen: false,
      		mobile  : false
		};

		this.navigate = this.navigate.bind(this);
		this.handleMenu = this.handleMenu.bind(this);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	handleMenu() {
		this.setState({ menuOpen : !this.state.menuOpen });
	}

	navigate(page) {
		// dispatch navigation if the page isn't already active
		// @TODO: detect active page on component mount
		if(!this.props[page]) {
	    	this.props.handleNav(page);
	    }
	}

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
        let className;

        if (this.props[name]) {
            className = 'active';
        } else {
        	className = '';
        }

        return className;
    }

    handleMenuClass() {
    	let className;

    	if(this.state.width < 760) {
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

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth});
	}

	render() {
		return (
			<div className="navbar">
				<div className="navbar__brand">
					EC
				</div>
				<div className={this.handleHamburgerClass()} onClick={this.handleMenu}>
					<div />
					<div />
					<div />
				</div>
				<ul className={this.handleMenuClass()}>
					<li className={this.handleNavClass('home')} onClick={() => { this.navigate('home'); }}>Home</li>
					<li className={this.handleNavClass('about')} onClick={() => { this.navigate('about'); }}>About</li>
					<li className={this.handleNavClass('portfolio')} onClick={() => { this.navigate('portfolio'); }}>Portfolio</li>
					<li className={this.handleNavClass('contact')} onClick={() => { this.navigate('contact'); }}>Contact</li>
				</ul>
			</div>
		);
	}

};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);