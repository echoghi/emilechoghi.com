import React from 'react';
import { connect } from 'react-redux';
import { activatePage } from './actions';
// Components
import NavBar from './NavBar';
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
  				date: 'July 2nd, 2017',
  				text: 'A wedding site for my brother\'s union',
  				image: weddingImg,
  				link: 'http://choghiwedding.com',
  				tech: [
  					{key: 0, label: 'Angular.js', class: 'icon-angular'},
  					{key: 1, label: 'SCSS', class: 'icon-scss'},
  					{key: 2, label: 'Node.js', class: 'icon-node'}
  				],
  				key: 0
  			},
  			{
  				title: 'Ninety Music',
  				date: 'July 2nd, 2017',
  				text: 'A music player powered by SoundCloud',
  				image: ninetyImg,
  				link: 'http://echoghi.github.io/ClomMafMedia/',
  				tech: [
  					{key: 0, label: 'Angular.js', class: 'icon-angular'},
  					{key: 1, label: 'SCSS', class: 'icon-scss'}
  				],
  				key: 1
  			},
  			{
  				title: 'PiDash',
  				date: 'July 2nd, 2017',
  				text: 'A dashboard app for Raspberry Pi',
  				image: pidashImg,
  				link: 'https://github.com/echoghi/PiDash',
  				tech: [
  					{key: 0, label: 'React.js', class: 'icon-react'},
  					{key: 1, label: 'Webpack', class: 'icon-webpack'},
  					{key: 2, label: 'SCSS', class: 'icon-scss' , size: 30}, 
  					{key: 3, label: 'Node.js', class: 'icon-node'}
  				],
  				key: 2
  			},
  			{
  				title: 'Slavebot',
  				date: 'May 24th, 2016',
  				text: 'A simple Reddit bot',
  				image: slavebotImg,
  				link: 'https://github.com/echoghi/slavebot',
  				tech: [
  					{key: 0, label: 'Node.js', class: 'icon-node'}
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

		this.state.projects.map(function(p) {
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
			</div>
		);
	}

};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);