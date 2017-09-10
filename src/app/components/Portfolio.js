import React from 'react';
// Components
import NavBar from './NavBar';

class Portfolio extends React.Component {
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
				<div className="portfolio">

					<div className="clearfix" />
					
					<h4 className="portfolio__header">
						Some Recent Projects
					</h4>
				</div>
			</div>
		);
	}

};

export default Portfolio;