import React, { memo } from 'react';
import ReactGA from 'react-ga';
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

const sendAnalytics = project => {
    if (NODE_ENV === 'production') {
        ReactGA.event({
            category: 'Portfolio Item',
            action: 'Project Click',
            label: `Navigated to ${project}`
        });
    }
};

const Project = memo(({ title, description, stack, link, color, image }) => (
    <Flipped flipId={title}>
        <ListItem onClick={() => sendAnalytics(title)}>
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
));

export default Project;
