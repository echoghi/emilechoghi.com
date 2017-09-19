import React from 'react';
// Components
import NavBar from './NavBar';
import Project from './Project';

class Portfolio extends React.Component {
	constructor() {
		super();

		this.state = {
      		loading  : true,
      		error    : null,
      		projects : [
      		{
      				title: 'Choghi Wedding',
      				date: 'July 2nd, 2017',
      				text: 'A wedding site for my brother\'s union',
      				image: 'http://res.cloudinary.com/dp7726gkk/raw/upload/v1505440846/website.png',
      				link: 'http://choghiwedding.com',
      				tech: [
      					{key: 0, label: 'Angular.js', class: 'icon-angular'},
      					{key: 1, label: 'SCSS', class: 'icon-SCSS'},
      					{key: 2, label: 'Node.js', class: 'icon-node'}
      				],
      				key: 0
      			},
      			{
      				title: 'Ninety Music',
      				date: 'July 2nd, 2017',
      				text: 'A music player powered by SoundCloud',
      				image: 'http://res.cloudinary.com/dp7726gkk/raw/upload/v1505610531/ninety_oktikp.png',
      				link: 'http://echoghi.github.io/ClomMafMedia/',
      				tech: [
      					{key: 0, label: 'Angular.js', class: 'icon-angular'},
      					{key: 1, label: 'SCSS', class: 'icon-SCSS'}
      				],
      				key: 1
      			},
      			{
      				title: 'PiDash',
      				date: 'July 2nd, 2017',
      				text: 'A dashboard app for Raspberry Pi',
      				image: 'http://res.cloudinary.com/dp7726gkk/raw/upload/v1505617148/pidash_rlnojn.png',
      				link: 'https://github.com/echoghi/PiDash',
      				tech: [
      					{key: 0, label: 'React.js', class: 'icon-react'},
      					{key: 1, label: 'Webpack', class: 'icon-webpack'},
      					{key: 2, label: 'SCSS', class: 'icon-SCSS' , size: 30}, 
      					{key: 3, label: 'Node.js', class: 'icon-node'}
      				],
      				key: 2
      			},
      			{
      				title: 'Slavebot',
      				date: 'May 24th, 2016',
      				text: 'A simple Reddit bot',
      				image: 'http://res.cloudinary.com/dp7726gkk/raw/upload/v1505455976/reddit_xm2nbz.png',
      				link: 'https://github.com/echoghi/slavebot',
      				tech: [
      					{key: 0, label: 'Node.js', class: 'icon-node'}
      				],
      				key: 3
      			}
      		]
		};
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

export default Portfolio;