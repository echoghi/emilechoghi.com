import React from 'react';
import { connect } from 'react-redux';
import { activatePage } from './actions';
// Components
import NavBar from './NavBar';
import Footer from './Footer';
import Anime from 'react-anime';
import ReactGA from 'react-ga';
import {
	VerticalTimeline,
	VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const icons = {
	doctor:
		'M 598 256 v -86 h -172 v 86 h 172 Z M 854 256 c 48 0 84 38 84 86 v 468 c 0 48 -36 86 -84 86 h -684 c -48 0 -84 -38 -84 -86 v -468 c 0 -48 36 -86 84 -86 h 172 v -86 c 0 -48 36 -84 84 -84 h 172 c 48 0 84 36 84 84 v 86 h 172 Z',
	freecodecamp:
		'M 622 708 l 198 -196 l -198 -196 l 60 -60 l 256 256 l -256 256 Z M 402 708 l -60 60 l -256 -256 l 256 -256 l 60 60 l -198 196 Z',
	grad:
		'M 512 128 l 470 256 v 342 h -86 v -296 l -384 210 l -470 -256 Z M 214 562 l 298 164 l 298 -164 v 172 l -298 162 l -298 -162 v -172 Z'
};

const Icon = props =>
	<svg width="22" height="22" viewBox="0 0 1024 1024">
		<path d={icons[props.icon]} />
	</svg>;

const mapStateToProps = state => ({
	portfolio: state.navigationState.about,
	previousRoute: state.navigationState.previousRoute
});

const mapDispatchToProps = dispatch => ({
	activatePage: page => dispatch(activatePage(page))
});

class About extends React.Component {
	/* eslint-disable */
	state = {
		loading: true,
		error: null
	};
	/* eslint-enable */

	componentWillMount() {
		let { about, activatePage } = this.props;
		window.scrollTo(0, 0);

		if (!about) {
			activatePage('about');
		}
	}

	componentDidMount() {
		if(NODE_ENV === 'production') {
			ReactGA.ga('send', 'pageview', '/about');
		}
	}

	render() {
		let transition = {
			delay: (el, index) => index * 240,
			elasticity: 0,
			duration: 1000,
			opacity: [0, 1],
			translateX: [-200, 0]
		};

		if (this.props.previousRoute === '/') {
			transition.translateX = [200, 0];
		}

		return (
			<div>
				<NavBar pathname={this.props.location.pathname} />

				<Anime {...transition}>
					<div className="about">
						<div className="clearfix" />

						<div className="jumbotron">
							<div className="jumbotron__container">
								<div className="jumbotron__content">
									<h1>Web Developer based in Palo Alto</h1>
									<p>
										As a professional web developer from the
										Bay Area, I’ve spent the last 2 years
										exploring the boundaries of web
										development to create user experiences
										that are fast, well designed, and a joy
										to use. I specialize in creating complex
										web applications, but my current focus
										is in providing effortless user
										experiences by understanding what users
										wants. By day, I'm a frontend engineer
										at{' '}
										<a
											className="jumbotron__link"
											href="https://www.doctor.com"
										>
											Doctor.com
										</a>, but in my free time you can find
										me building sites and apps with React,
										Webpack, and Node.js, tinkering around
										with my Raspberry Pi, or playing
										basketball.
									</p>
								</div>
							</div>
						</div>
						<div className="skills">
							<h1>Where I've worked</h1>
							<div className="skills__container">
								<VerticalTimeline>
									<VerticalTimelineElement
										className="vertical-timeline-element--work"
										date="2017 - present"
										iconStyle={{
											background: '#00BDBD',
											color: '#fff',
											fill: '#fff'
										}}
										icon={<Icon icon="doctor" />}
									>
										<h3 className="vertical-timeline-element-title">
											Junior Software Engineer II
										</h3>
										<h4 className="vertical-timeline-element-subtitle">
											Doctor.com
										</h4>
										<p>
											Frontend web development with
											React.js, Webpack, and Sass.
										</p>
									</VerticalTimelineElement>
									<VerticalTimelineElement
										className="vertical-timeline-element--work"
										date="2016 - 2017"
										iconStyle={{
											background: '#00BDBD',
											color: '#fff',
											fill: '#fff'
										}}
										icon={<Icon icon="doctor" />}
									>
										<h3 className="vertical-timeline-element-title">
											Junior Software Engineer I
										</h3>
										<h4 className="vertical-timeline-element-subtitle">
											Doctor.com
										</h4>
										<p>
											Frontend web and app development
											with Angular.js 1.x, jQuery, Sass.
										</p>
									</VerticalTimelineElement>
									<VerticalTimelineElement
										className="vertical-timeline-element--work"
										date="2015 - 2016"
										iconStyle={{
											background: '#269bda',
											color: '#fff',
											fill: '#fff'
										}}
										icon={<Icon icon="doctor" />}
									>
										<h3 className="vertical-timeline-element-title">
											Freelance Web Developer
										</h3>
										<h4 className="vertical-timeline-element-subtitle">
											Palo Alto, CA
										</h4>
										<p>
											Fullstack web development with
											Angular.js 1.x, Node.js, jQuery, and
											Sass.
										</p>
									</VerticalTimelineElement>
									<VerticalTimelineElement
										className="vertical-timeline-element--work"
										date="2015 - 2016"
										iconStyle={{
											background: 'darkgreen',
											color: '#fff',
											fill: '#fff'
										}}
										icon={<Icon icon="freecodecamp" />}
									>
										<h3 className="vertical-timeline-element-title">
											Frontend Development Certification
										</h3>
										<h4 className="vertical-timeline-element-subtitle">
											FreeCodeCamp
										</h4>
										<p>
											User Experience, Visual Design,
											Javascript, CSS, HTML
										</p>
									</VerticalTimelineElement>
									<VerticalTimelineElement
										className="vertical-timeline-element--work"
										date="2012 - 2014"
										iconStyle={{
											background: '#FFC500',
											color: '#fff',
											fill: '#fff'
										}}
										icon={<Icon icon="grad" />}
									>
										<h3 className="vertical-timeline-element-title">
											B.A. Politics
										</h3>
										<h4 className="vertical-timeline-element-subtitle">
											University of California, Santa Cruz
										</h4>
										<p>
											Sub-Saharan African and Middle
											Eastern Affairs
										</p>
									</VerticalTimelineElement>
								</VerticalTimeline>
							</div>
						</div>

						<Footer />
					</div>
				</Anime>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
