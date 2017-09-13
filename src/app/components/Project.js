import React from 'react';
import Chip from 'material-ui/Chip';

class Project extends React.Component {
	renderChips() {
		let chips = [];
		let styles = {
			margin: 4
		};

		this.props.chips.map(function(chip) {
			chips.push(
				<Chip style={styles} key={chip.key}>
		          {chip.label}
		        </Chip>
			);
		});

		return chips;
	}

	render() {
		return (
			<div className="portfolio__item">
				<div className="portfolio__item--preview">
				</div>
				<div className="portfolio__item--info">
					<div>{this.props.title}</div>
					<div>{this.props.date}</div>
					<div>{this.props.description}</div>
					<div className="chips">
						{this.renderChips()}
					</div>
				</div>
			</div>
		);
	}

};

export default Project;