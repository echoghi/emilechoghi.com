import React from 'react';
// Components
import NavBar from './NavBar';

class Contact extends React.Component {
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
					<form>
						<h4> Contact Me </h4>
						<input type="text" name="name"/>
					</form>
				</div>
			</div>
		);
	}

};

export default Contact;