import React from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import Grow from '@material-ui/core/Grow';

const ListItem = styled.li`
    display: inline-block;
    box-sizing: border-box;
    list-style: none;
    padding: 0 10px;
    vertical-align: top;
    width: 33%;

    @media (min-width: 1200px) {
        &:nth-child(4) {
            float: left;
        }
    }

    @media (max-width: 1199px) and (min-width: 1024px) {
        display: inline-block;
        width: 50%;
        padding: 15px;

        &:nth-child(3) {
            float: left;
        }
    }

    @media (max-width: 1023px) {
        display: inline-block;
        width: 50%;
        padding: 0 20px 20px 20px;

        &:nth-child(odd) {
            padding-right: 10px;
        }

        &:nth-child(even) {
            padding-left: 10px;
        }

        &:nth-child(3) {
            float: left;
        }
    }

    @media (max-width: 600px) {
        display: flex;
        width: 100%;

        &:nth-child(even),
        &:nth-child(odd) {
            padding: 0 20px 20px 20px;
        }
    }
`;

const PortfolioLink = styled.a`
    display: block;
`;

const PortfolioItem = styled.div`
    margin: 2px;
    display: inline-block;
    border-radius: 2px;
    height: auto;
    width: auto;
    box-shadow: none;
    transition: all 0.3s;

    &:hover {
        transition: all.3s;
        cursor: pointer;
    }

    &:first-child {
        margin: 2px 0;
    }

    @media (max-width: 1023px) {
        display: inline-block;
    }
`;

const ImageWrapper = styled.div`
    height: 275px;
    width: 100%;
    border-radius: 3px;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    z-index: 1;

    img {
        height: 100%;
        width: 100%;
        transition: all 0.3s ease-in-out;
    }
`;

const Image = styled.div`
    display: inline-block;
    height: 100%;
    width: 100%;
    background: ${props => props.color};
`;

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

class Project extends React.PureComponent {
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
        const { title, description, stack, link, active, color, image } = this.props;

        return (
            <Grow in={active}>
                <ListItem onClick={() => this.sendAnalytics(title)}>
                    <PortfolioLink href={link} target="_blank">
                        <PortfolioItem>
                            <ImageWrapper>
                                <Image color={color}>
                                    <img src={image} />
                                </Image>
                            </ImageWrapper>
                            <Info>
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
                        </PortfolioItem>
                    </PortfolioLink>
                </ListItem>
            </Grow>
        );
    }
}

export default Project;
