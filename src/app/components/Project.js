import React from 'react';
import Avatar from 'material-ui/Avatar';
import ReactTooltip from 'react-tooltip';

class Project extends React.Component {
	renderChips() {
		let chips = [];

		this.props.chips.map(function(chip) {
			chips.push(
				<Avatar key={chip.key} data-for={chip.class} data-tip='tooltip'>
					<i className={chip.class}/>
					<ReactTooltip class='chip__tip' type='info' id={chip.class}>
						<span>{chip.label}</span>
					</ReactTooltip>
				</Avatar>
			);
		});

		return chips;
	}

	render() {
		let { title, image, date, description, link } = this.props;

		return (
			<li>
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
			</li>
		);
	}

};

export default Project;