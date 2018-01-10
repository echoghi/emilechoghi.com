import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveWidth, saveRoute } from './actions';

const mapStateToProps = state => ({
	data: state.portfolioState.data,
	home: state.navigationState.home,
	about: state.navigationState.about,
	portfolio: state.navigationState.portfolio,
	contact: state.navigationState.contact
});

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
		let { pathname, saveRoute } = this.props;

		return (
			<div className="navbar">
				<div className="navbar__brand">
					<Link to="/">
						<i className="icon-brand" />
					</Link>
				</div>
				<div
					className={this.handleHamburgerClass()}
					onClick={this.handleMenu}
				>
					<div />
					<div />
					<div />
				</div>
				<ul className={this.handleMenuClass()}>
					<li
						className={this.handleNavClass('home')}
						onClick={() => saveRoute(pathname)}
					>
						<Link to="/">
							{' '}Home <i className="icon-home" />
						</Link>
					</li>
					<li
						className={this.handleNavClass('about')}
						onClick={() => saveRoute(pathname)}
					>
						<Link to="/about">
							About <i className="icon-user" />
						</Link>
					</li>
					<li
						className={this.handleNavClass('portfolio')}
						onClick={() => saveRoute(pathname)}
					>
						<Link to="/portfolio">
							Portfolio <i className="icon-briefcase" />
						</Link>
					</li>
					<li
						className={this.handleNavClass('contact')}
						onClick={() => saveRoute(pathname)}
					>
						<Link to="/contact">
							Contact <i className="icon-message-square" />
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
