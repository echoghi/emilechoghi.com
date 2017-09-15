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
      				title: 'PiDash',
      				date: 'July 2nd, 2017',
      				text: 'A dashboard app for Raspberry Pi using React',
      				image: 'http://res.cloudinary.com/dp7726gkk/raw/upload/v1505453477/pidash_zh6t7v.png',
      				link: 'https://github.com/echoghi/PiDash',
      				tech: [
      					{key: 0, label: 'React.js'},
      					{key: 1, label: 'Webpack'},
      					{key: 2, label: 'SCSS'},
      					{key: 3, label: 'Node.js'}
      				],
      				key: 0
      			},
      			{
      				title: 'Ninety Music',
      				date: 'July 2nd, 2017',
      				text: 'A music player powered by the SoundCloud API',
      				image: 'http://res.cloudinary.com/dp7726gkk/raw/upload/v1505451711/ninety_jryvwc.png',
      				link: 'http://echoghi.github.io/ClomMafMedia/',
      				tech: [
      					{key: 0, label: 'React.js'},
      					{key: 1, label: 'Webpack'},
      					{key: 2, label: 'SCSS'},
      					{key: 3, label: 'Node.js'}
      				],
      				key: 1
      			},
      			{
      				title: 'Choghi Wedding',
      				date: 'July 2nd, 2017',
      				text: 'A wedding site for my brother\'s wedding',
      				image: 'http://res.cloudinary.com/dp7726gkk/raw/upload/v1505440846/website.png',
      				link: 'http://choghiwedding.com',
      				tech: [
      					{key: 0, label: 'Angular.js'},
      					{key: 1, label: 'SCSS'},
      					{key: 2, label: 'Node.js'}
      				],
      				key: 2
      			},
      			{
      				title: 'Choghi Wedding',
      				date: 'July 2nd, 2017',
      				text: 'A wedding site for my brother\'s wedding',
      				image: 'http://res.cloudinary.com/dp7726gkk/raw/upload/v1505440846/website.png',
      				link: 'http://choghiwedding.com',
      				tech: [
      					{key: 0, label: 'Angular.js'},
      					{key: 1, label: 'SCSS'},
      					{key: 2, label: 'Node.js'}
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
						Some Recent Projects
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