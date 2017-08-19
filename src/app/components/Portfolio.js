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
					
					Portfolio
				</div>
			</div>
		);
	}

};

export default Portfolio;