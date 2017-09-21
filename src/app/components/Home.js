import React from 'react';
// Components
import NavBar from './NavBar';

class Home extends React.Component {
	constructor() {
		super();

		this.state = {
      		loading : true,
      		error   : null
		};
	}

	componentWillMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div>
				<NavBar />
				<div className="home">
					home
				</div>
			</div>
		);
	}

};

export default Home;