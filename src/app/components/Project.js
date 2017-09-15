import React from 'react';
import Chip from 'material-ui/Chip';

class Project extends React.Component {
	renderChips() {
		let chips = [];

		this.props.chips.map(function(chip) {
			chips.push(
				<Chip key={chip.key} label={chip.label} />
			);
		});

		return chips;
	}

	render() {
		let { title, image, date, description, link } = this.props;

		return (
			<div className="portfolio__item">
				<div className="portfolio__item--preview">
					<a href={link} target="_blank">
						<img src={image} />
						<i className="icon-redo2"/>
					</a>
				</div>
				<div className="portfolio__item--info">
					<div>{title}</div>
					<div>{date}</div>
					<div>{description}</div>
					<div className="chips">
						{this.renderChips()}
					</div>
				</div>
			</div>
		);
	}

};

export default Project;