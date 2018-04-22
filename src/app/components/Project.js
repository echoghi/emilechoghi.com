import React from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';

class Project extends React.Component {
    renderImage() {
        const { image } = this.props;

        const Image = styled.div`
            display: inline-block;
            height: 100%;
        `;

        return (
            <Image>
                <img src={image} />
                <i className="icon-redo2" />
            </Image>
        );
    }

    sendAnalytics(project) {
        if (NODE_ENV === 'production') {
            ReactGA.event({
                category: 'Portfolio Item',
                action: 'Project Click',
                label: `Navigated to ${project}`
            });
        }
    }

    renderProjectLabels(chips) {
        let labels = [];

        _.map(chips, chip => {
            labels.push(chip.label);
        });

        labels = _.uniq(labels, 'label');

        return labels;
    }

    render() {
        const { title, description, stack } = this.props;

        const Stack = styled.div`
            text-transform: uppercase;
            font-size: 14px;
        `;

        const Label = styled.span`
            padding-right: 5px;
            font-weight: 700;
            color: rgb(155, 49, 67);
        `;

        const Info = styled.span`
            text-align: left;
            padding: 20px;
            font-family: 'Varela Round';
        `;

        const Title = styled.div`
            font-weight: bold;
            font-size: 17px;
            padding-top: 10px;
        `;

        const Text = styled.div`
            text-align: left;
            padding: 5px 0;
            font-family: 'Varela Round';
        `;

        return (
            <a href={this.props.link} target="_blank">
                <li onClick={() => this.sendAnalytics(title)}>
                    <div className="portfolio__item">
                        <div className="portfolio__item--preview">{this.renderImage()}</div>
                        <Info className="portfolio__item--info">
                            <Stack>
                                {stack.map((label, index) => {
                                    return (
                                        <Label key={label.key}>
                                            {label.label} {index + 1 === stack.length ? '' : <span>&#8226;</span>}
                                        </Label>
                                    );
                                })}
                            </Stack>
                            <Title>{title}</Title>
                            <Text>{description}</Text>
                        </Info>
                    </div>
                </li>
            </a>
        );
    }
}

export default Project;
