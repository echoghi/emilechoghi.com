import React from 'react';
import { connect } from 'react-redux';
import { handleNav } from './actions';

const mapStateToProps = state => ({
	width: 0,
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
      		loading : true,
      		error   : null,
      		menuOpen: false,
      		mobile: false
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

	renderBrand() {
		if(this.state.width < 1024) {
			return (<div onClick={this.handleMenu} className={this.handleBrandClass()}>
				EC
			</div>);
		} else {
			return (<div className={this.handleBrandClass()}>
				EC
			</div>);
		}
	}

	handleBrandClass() {
		let className;

        if (this.state.menuOpen) {
            className = 'navbar__brand active';
        } else {
        	className = 'navbar__brand';
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
			{this.renderBrand()}
				<ul className="navbar__menu">
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