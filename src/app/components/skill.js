import React from 'react';

class Skill extends React.Component {
	render() {
		let { title, text, src } = this.props;

		return (
			<div className="skill">
				<div className="skill__content">
					<h3>{title}</h3>
					<p>{text}</p>
				</div>
				<img src={src} />
			</div>
		);
	}

};

export default Skill;