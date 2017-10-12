import React from 'react';
import { connect } from 'react-redux';
import { activatePage } from './actions';
// Components
import NavBar from './NavBar';
// Images
import homeImg from '../assets/images/home.png';

const mapStateToProps = state => ({
    home: state.navigationState.home
});

const mapDispatchToProps = dispatch => ({
    activatePage: page => dispatch(activatePage(page))
});

class Home extends React.Component {
	state = {
  		loading : true,
  		error   : null
	};

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
					<div className="jumbotron">
						<div className="jumbotron__container">
							<div className="jumbotron__content">
								<h1>Emile Choghi</h1>
								<h2>Frontend Engineer</h2>
							</div>
						</div>
					</div>
					<img src={homeImg} />
				</div>
			</div>
		);
	}

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);