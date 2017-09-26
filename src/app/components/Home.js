import React from 'react';
import { connect } from 'react-redux';
import { activatePage } from './actions';
// Components
import NavBar from './NavBar';

const mapStateToProps = state => ({
    home: state.navigationState.home
});

const mapDispatchToProps = dispatch => ({
    activatePage: page => dispatch(activatePage(page))
});

class Home extends React.Component {
	constructor() {
		super();

		this.state = {
      		loading : true,
      		error   : null
		};
	}

	componentWillMount() {
		let { home, activatePage } = this.props;
		window.scrollTo(0, 0);

		if(!home) {
			activatePage('home');
		}
	}

	render() {
		return (
			<div>
				<NavBar />
				<div className="home">
					home
				</div>
			</div>
		);
	}

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);