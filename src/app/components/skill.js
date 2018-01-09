import React from 'react';

class Skill extends React.PureComponent {
	render() {
		let { title, text, src } = this.props;

		return (
			<div className="skill__wrapper">
				<div className="skill">
					<div className="skill__content">
						<h2>
							{title}
						</h2>
						<p>
							{text}
						</p>
					</div>
				</div>
				<div className="skill">
					<img src={src} />
				</div>
			</div>
		);
	}
}

export default Skill;
