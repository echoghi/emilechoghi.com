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
      		loading : true,
      		error   : null
		};

		this.navigate = this.navigate.bind(this);
	}

	navigate(page) {
		// dispatch navigation if the page isn't already active
		// @TODO: detect active page on component mount
		if(!this.props[page]) {
	    	this.props.handleNav(page);
	    }
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

	render() {
		return (
			<div className="navbar">
			<div className="navbar__brand">
				<span className="icon-terminal" />
			</div>
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