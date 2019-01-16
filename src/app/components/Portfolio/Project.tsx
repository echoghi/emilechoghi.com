import * as React from 'react';
import * as ReactGA from 'react-ga';
import { Flipped } from 'react-flip-toolkit';
import {
    ListItem,
    PortfolioItem,
    PortfolioLink,
    Text,
    Title,
    Info,
    Label,
    Stack,
    Image,
    ImageWrapper
} from './styles';

function sendAnalytics(project: string) {
    if (NODE_ENV === 'production') {
        return () =>
            ReactGA.event({
                action: 'Project Click',
                category: 'Portfolio Item',
                label: `Navigated to ${project}`
            });
    }
}

interface Project {
    title: string;
    description: string;
    stack: string[];
    link: string;
    color: string;
    image: string;
}

const Project: React.FunctionComponent<Project> = ({
    title,
    description,
    stack,
    link,
    color,
    image
}) => (
    <Flipped flipId={title}>
        <ListItem onClick={sendAnalytics(title)}>
            <PortfolioLink href={link} target="_blank" rel="noopener noreferrer">
                <PortfolioItem>
                    <ImageWrapper>
                        <Image color={color}>
                            <img src={image} alt={title} />
                        </Image>
                    </ImageWrapper>
                    <Info>
                        <Stack>
                            {stack.map((label, index) => {
                                return (
                                    <Label key={label}>
                                        {label}{' '}
                                        {index + 1 === stack.length ? '' : <span>&#8226;</span>}
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
    </Flipped>
);

export default React.memo(Project);
