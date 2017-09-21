import React from 'react';
// Components
import NavBar from './NavBar';
import Skill from './Skill';

class About extends React.Component {
	constructor() {
		super();

		this.state = {
      		loading : true,
      		error   : null,
      		skills: [
      			{
      				name: 'Responsive Development',
      				image: 'http://res.cloudinary.com/dp7726gkk/raw/upload/v1505621946/responsive_nsielw.png',
      				text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. ',
      				key: 0
      			},
      			{
      				name: 'Fast Build Cycle',
      				image: 'http://res.cloudinary.com/dp7726gkk/raw/upload/v1505622031/timer_oud6ys.png',
      				text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.',
      				key: 1
      			},
      			{
      				name: 'Organized Approach',
      				image: 'http://res.cloudinary.com/dp7726gkk/raw/upload/v1505622030/plan_dx2unc.png',
      				text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.',
      				key: 2
      			},
      			{
      				name: '24/7 Maintenance',
      				image: 'http://res.cloudinary.com/dp7726gkk/raw/upload/v1505622030/keyboard_cueiq1.png',
      				text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.',
      				key: 3
      			}
      		]
		};
	}

	componentWillMount() {
		window.scrollTo(0, 0);
	}

	renderSkills() {
		let skills = [];

		this.state.skills.map(function(skill) {
			skills.push(<Skill title={skill.name} src={skill.image} text={skill.text} key={skill.key}/>);
		});

		return skills;
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
						<h1>What I specialize in</h1>
						<div className="skills__container" >
							{this.renderSkills()}
						</div>
					</div>
				</div>
			</div>
		);
	}

};

export default About;