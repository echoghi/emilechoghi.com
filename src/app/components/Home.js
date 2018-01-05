import React from 'react';
import { connect } from 'react-redux';
import { activatePage } from './actions';
// Components
import NavBar from './NavBar';
import Anime from 'react-anime';
import Lottie from 'react-lottie';
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
	home: state.navigationState.home
});

const mapDispatchToProps = dispatch => ({
	activatePage: page => dispatch(activatePage(page))
});

class Home extends React.Component {
	state = {
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

	renderLottie(letter) {
		// prettier-ignore
		const durationSwitch = letter =>
            ({
                'e': {
                	data: eData,
                	width: 50
                },
                'm': {
                	data: mData,
                	width: 75
                },
                'i': {
                	data: iData,
                	width: 50
                },
                'l': {
                	data: lData,
                	width: 50
                },
                'c': {
                	data: cData,
                	width: 75
                },
                'h': {
                	data: hData,
                	width: 75
                },
                'o': {
                	data: oData,
                	width: 75
                },
                'g': {
                	data: gData,
                	width: 75
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

		return <Lottie options={options} height={150} width={width} />;
	}

	render() {
		let { firstName, lastName } = this.state;

		let transition = {
			delay: (el, index) => index * 240,
			elasticity: 0,
			duration: 1000,
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
										{_.map(firstName.split(''), letter => {
											return this.renderLottie(letter);
										})}
									</section>
									{/* Last Name */}
									<section>
										{_.map(lastName.split(''), letter => {
											return this.renderLottie(letter);
										})}
									</section>
									<h2>Frontend Engineer</h2>
								</div>
							</div>
						</div>
						<img src={homeImg} />
					</div>
				</Anime>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
