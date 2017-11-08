import React from 'react';
import { connect } from 'react-redux';
import { activatePage } from './actions';
// Components
import NavBar from './NavBar';
import Footer from './Footer';
import Skill from './Skill';
// Images
import responsiveImg from '../assets/images/responsive.png';
import timerImg from '../assets/images/timer.png';
import planImg from '../assets/images/plan.png';
import keyboardImg from '../assets/images/keyboard.png';

const mapStateToProps = state => ({
    portfolio: state.navigationState.about
});

const mapDispatchToProps = dispatch => ({
    activatePage: page => dispatch(activatePage(page))
});

class About extends React.Component {
	state = {
  		loading : true,
  		error   : null,
  		skills: [
  			{
  				name: 'Responsive Development',
  				image: responsiveImg,
  				text: 'The majority of people on the internet these days are not just sitting in front of their desktop computers; they\'re on their phones, tablets, and a bunch of other handheld devices. That\'s why its critical for my websites to be responsive across breakpoints, making good use of screen real estate while never compromising on design. Almost every project that I\'ve worked on is coded with the expectation that it could be used on any device, so I strive to keep the user\'s experience effortless, flexible, and clean.',
  				key: 0
  			},
  			{
  				name: 'Fast Build Cycle',
  				image: timerImg,
  				text: 'When I start a new project, I like to have nothing else in my queue. That way, I can give it every last bit of my attention until the code goes live. As part of my process, I use the latest software to speed up my development process with neat little time savers like webpack which allows me to compile my code and refresh the page I\'m working on across my phone, tablet, and laptop as soon as I\'ve hit "save". ',
  				key: 1
  			},
  			{
  				name: 'Organized Approach',
  				image: planImg,
  				text: 'I like to keep it simple. My goals are to focus on minimalism of design and lightweight code while effectively conveying the message that you want to send. I try to steer clear of clutter and deliver a website that\'s easy to navigate, present information, and most importantly (for myself), maintain. In my experience, I\'ve realized that a well organized website/code base can shave days or even weeks off of even the simplest of projects. For some releases, that extra time can make a world of difference.',
  				key: 2
  			},
  			{
  				name: '24/7 Maintenance',
  				image: keyboardImg,
  				text: 'Drop me a line whenever. I\'m always available to make urgent changes to a site, and if its anything smaller than a complete overhaul of a page, chances are I\'ll have your site updated and redeployed within a day. My backend configurations with Node.js, along with my one command webpack build system are very simple to use once completed and make site maintenance a breeze.',
  				key: 3
  			}
  		]
	};

	componentWillMount() {
		let { about, activatePage } = this.props;
		window.scrollTo(0, 0);

		if(!about) {
			activatePage('about');
		}
	}

	renderSkills() {
		let skills = [];

		this.state.skills.map(function(skill) {
			skills.push(<Skill title={skill.name} src={skill.image} text={skill.text} key={skill.key}/>);
		});

		return skills;
	}

	render() {
		return (
			<div>
				<NavBar />
				<div className="about">

					<div className="clearfix" />
					
					<div className="jumbotron">
						<div className="jumbotron__container">
							<div className="jumbotron__content">
								<h1>Web Developer based in Palo Alto</h1>
								<p>As a professional web and app developer from the Bay Area, 
								I’ve spent the last 2 years exploring the boundaries of web development 
								to make sure I can deliver websites that are fast, well designed, and responsive. By day, I'm a frontend
								engineer at <a className="jumbotron__link" href="https://www.doctor.com">Doctor.com</a>, but in my free time I enjoy building sites for clients using the most up to date software
								available, kicking off each new project with a custom toolkit of ideas and a fresh approach built to match your needs.</p>
							</div>
						</div>
					</div>
					<div className="skills">
						<h1>What I specialize in</h1>
						<div className="skills__container" >
							{this.renderSkills()}
						</div>
					</div>

					<Footer />
				</div>
			</div>
		);
	}

};

export default connect(mapStateToProps, mapDispatchToProps)(About);