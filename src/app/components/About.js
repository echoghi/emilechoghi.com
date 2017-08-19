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
					
					About
				</div>
			</div>
		);
	}

};

export default About;