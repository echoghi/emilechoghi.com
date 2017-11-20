import React from 'react';
import { connect } from 'react-redux';
import { activatePage } from './actions';
// Components
import NavBar from './NavBar';
import Footer from './Footer';
import Project from './Project';
// Images
import weddingImg from '../assets/images/wedding.png';
import ninetyImg from '../assets/images/ninety.png';
import pidashImg from '../assets/images/pidash.png';
import slavebotImg from '../assets/images/reddit.png';

const mapStateToProps = state => ({
    portfolio: state.navigationState.portfolio
});

const mapDispatchToProps = dispatch => ({
    activatePage: page => dispatch(activatePage(page))
});

class Portfolio extends React.Component {
	state = {
  		loading  : true,
  		error    : null,
  		projects : [
  		{
  				title: 'Choghi Wedding',
  				date: 'October 5th, 2016',
  				text: 'A site for my brother\'s wedding, featuring an itinerary, photos, and guestbook.',
  				image: weddingImg,
  				link: 'http://choghiwedding.com',
  				tech: [
  					{key: 0, label: 'Angular.js', class: 'icon-angular', id: 'icon-1'},
  					{key: 1, label: 'SCSS', class: 'icon-scss', id: 'icon-2'},
  					{key: 2, label: 'Node.js', class: 'icon-node', id: 'icon-3'}
  				],
  				key: 0
  			},
  			{
  				title: 'Ninety Music',
  				date: 'April 3rd, 2016',
  				text: 'A music player made to promote my friends\' group, using the SoundCloud API.',
  				image: ninetyImg,
  				link: 'http://echoghi.github.io/ClomMafMedia/',
  				tech: [
  					{key: 0, label: 'Angular.js', class: 'icon-angular', id: 'icon-4'},
  					{key: 1, label: 'SCSS', class: 'icon-scss', id: 'icon-5'}
  				],
  				key: 1
  			},
  			{
  				title: 'PiDash',
  				date: 'July 2nd, 2017',
  				text: 'A dashboard app meant to serve as a kiosk display running on my Raspberry Pi.',
  				image: pidashImg,
  				link: 'https://github.com/echoghi/PiDash',
  				tech: [
  					{key: 0, label: 'React.js', class: 'icon-react', id: 'icon-6'},
  					{key: 1, label: 'Webpack', class: 'icon-webpack', id: 'icon-7'},
  					{key: 2, label: 'SCSS', class: 'icon-scss' , size: 30, id: 'icon-8'}, 
  					{key: 3, label: 'Node.js', class: 'icon-node', id: 'icon-9'}
  				],
  				key: 2
  			},
  			{
  				title: 'Slavebot',
  				date: 'May 24th, 2016',
  				text: 'A simple Reddit bot that upvotes any content posted by the username it\'s given.',
  				image: slavebotImg,
  				link: 'https://github.com/echoghi/slavebot',
  				tech: [
  					{key: 0, label: 'Node.js', class: 'icon-node', id: 'icon-10'}
  				],
  				key: 3
  			}
  		]
	};

	componentWillMount() {
		let { portfolio, activatePage } = this.props;
		window.scrollTo(0, 0);

		if(!portfolio) {
			activatePage('portfolio');
		}
	}

	renderProjects() {
		let portfolio = [];

		this.state.projects.map(p => {
			portfolio.push(
				<Project title={p.title} date={p.date} description={p.text} key={p.key} chips={p.tech} image={p.image} link={p.link} />
			);
		});

		return portfolio;
	}

	render() {
		return (
			<div>
				<NavBar />
				<div className="portfolio">

					<div className="clearfix" />
					
					<h4 className="portfolio__header">
						Recent Projects
					</h4>

					<div className="portfolio__wrapper">
						{this.renderProjects()}
					</div>
				</div>
				<Footer fixed type="portfolio"/>
			</div>
		);
	}

};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);