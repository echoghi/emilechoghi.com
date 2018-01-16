import React from 'react';
import Avatar from 'material-ui/Avatar';
import ReactTooltip from 'react-tooltip';
import ReactGA from 'react-ga';

class Project extends React.Component {
	renderChips() {
		let chips = [];
		let customChip;

		_.map(this.props.chips, chip => {
			// Handle multipath icons
			if (chip.class === 'icon-angular') {
				customChip = (
					<span className={chip.class}>
						<span className="path1" />
						<span className="path2" />
						<span className="path3" />
						<span className="path4" />
						<span className="path5" />
					</span>
				);
			} else if (chip.class === 'icon-webpack') {
				customChip = (
					<span className={chip.class}>
						<span className="path1" />
						<span className="path2" />
						<span className="path3" />
					</span>
				);
			} else {
				customChip = <i className={chip.class} />;
			}

			chips.push(
				<Avatar key={chip.key} data-for={chip.id} data-tip="tooltip">
					{customChip}
					<ReactTooltip class="chip__tip" type="info" id={chip.id}>
						<span>
							{chip.label}
						</span>
					</ReactTooltip>
				</Avatar>
			);
		});

		return chips;
	}

	renderLink() {
		let { title, image, link } = this.props;

		if(link) {
			return (<a
						href={link}
						target="_blank"
						onClick={() => this.sendAnalytics(title)}
					>
						<img src={image} />
						<i className="icon-redo2" />
					</a>);
		} else {
			return(<div className="coming-soon">
					<div>Coming Soon</div>
					<img src={image} />
				</div>);
		}
	}

	sendAnalytics(project) {
		ReactGA.event({
			category: 'Portfolio Item',
			action: 'Project Click',
			label: `Navigated to ${project}`
		});
	}

	render() {
		let { title, date, description } = this.props;

		return (
			<li>
				<div className="portfolio__item">
					<div className="portfolio__item--preview">
						{this.renderLink()}
					</div>
					<div className="portfolio__item--info">
						<div>
							{title}
						</div>
						<div>
							{date}
						</div>
						<div>
							{description}
						</div>
						<div className="chips">
							{this.renderChips()}
						</div>
					</div>
				</div>
			</li>
		);
	}
}

export default Project;
