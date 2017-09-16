import React from 'react';
// Components
import NavBar from './NavBar';

class About extends React.Component {
	constructor() {
		super();

		this.state = {
      		loading : true,
      		error   : null
		};
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
								to make sure I deliver solutions with impact. With an outstanding bandwidth 
								of experience across the board - from small agencies to global corporations – 
								I approach each new project with a toolkit of ideas and a fresh approach to your needs.</p>
							</div>
						</div>
					</div>
					<div className="skills">
						<h1>What I do</h1>
					</div>
				</div>
			</div>
		);
	}

};

export default About;