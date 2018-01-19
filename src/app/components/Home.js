import React from 'react';
import { connect } from 'react-redux';
import { activatePage } from './actions';
// Components
import NavBar from './NavBar';
import Footer from './Footer';
import Anime from 'react-anime';
import Lottie from 'react-lottie';
import ReactGA from 'react-ga';
import * as eData from '../assets/animations/e.json';
import * as mData from '../assets/animations/m.json';
import * as iData from '../assets/animations/i.json';
import * as lData from '../assets/animations/l.json';
import * as cData from '../assets/animations/c.json';
import * as hData from '../assets/animations/h.json';
import * as oData from '../assets/animations/o.json';
import * as gData from '../assets/animations/g.json';
// Images
import homeImg from '../assets/images/home.png';

const mapStateToProps = state => ({
	home: state.navigationState.home,
	width: state.portfolioState.width
});

const mapDispatchToProps = dispatch => ({
	activatePage: page => dispatch(activatePage(page))
});

class Home extends React.Component {
	state = {
		initialLoad: true,
		duration: 1000,
		loading: true,
		error: null,
		firstName: 'emile',
		lastName: 'choghi',
		e1: false,
		m: false,
		i: false,
		l: false,
		e2: false
	};

	componentWillMount() {
		let { home, activatePage } = this.props;
		window.scrollTo(0, 0);

		if (!home) {
			activatePage('home');
		}
	}

	componentDidMount() {
		if(NODE_ENV === 'production') {
			ReactGA.ga('send', 'pageview', '/');
		}
	}

	renderLottie(letter, index) {
		// prettier-ignore
		const durationSwitch = letter =>
            ({
                'e': {
                	data: eData,
                	width: 40
                },
                'm': {
                	data: mData,
                	width: 50
                },
                'i': {
                	data: iData,
                	width: 40
                },
                'l': {
                	data: lData,
                	width: 40
                },
                'c': {
                	data: cData,
                	width: 50
                },
                'h': {
                	data: hData,
                	width: 50
                },
                'o': {
                	data: oData,
                	width: 50
                },
                'g': {
                	data: gData,
                	width: 50
                }
            })[letter];

		const { data, width } = durationSwitch(letter);

		const options = {
			loop: false,
			autoplay: true,
			animationData: data,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice',
				progressiveLoad: true
			}
		};

		return (
			<Lottie options={options} height={100} width={width} key={index} />
		);
	}

	stopAnimation() {
		if (this.state.initialLoad) {
			this.setState({ duration: 0, initialLoad: false });
		}
	}

	renderFooter() {
		if (this.props.width > 800) {
			return <Footer fixed />;
		}
	}

	render() {
		let { firstName, lastName, duration } = this.state;

		let transition = {
			delay: (el, index) => index * 240,
			complete: () => this.stopAnimation(),
			elasticity: 0,
			duration: duration,
			opacity: [0, 1],
			translateX: [-200, 0]
		};

		return (
			<div>
				<NavBar pathname={this.props.location.pathname} />
				<Anime {...transition}>
					<div className="home">
						<div className="jumbotron">
							<div className="jumbotron__container">
								<div className="jumbotron__content">
									{/* First Name */}
									<section>
										{_.map(
											firstName.split(''),
											(letter, index) => {
												return this.renderLottie(
													letter,
													index
												);
											}
										)}
									</section>
									{/* Last Name */}
									<section>
										{_.map(
											lastName.split(''),
											(letter, index) => {
												return this.renderLottie(
													letter,
													index
												);
											}
										)}
									</section>
									<h2>Frontend Engineer</h2>
								</div>
							</div>
						</div>
						<img src={homeImg} />
					</div>
				</Anime>

				{this.renderFooter()}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
