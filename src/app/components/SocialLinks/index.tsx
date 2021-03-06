import React from 'react';
import ReactGA from 'react-ga';
import { LinkWrapper, IconListItem } from './styles';

function sendAnalytics(site: string) {
    if (NODE_ENV === 'production') {
        return () =>
            ReactGA.event({
                action: 'Social Media Link Click',
                category: 'Social Link Bar',
                label: `Navigated to ${site} Profile`
            });
    }
}

const SocialLinks = () => (
    <LinkWrapper>
        <IconListItem>
            <a
                role="button"
                aria-label="github"
                href="https://github.com/echoghi"
                target="_blank"
                rel="noopener noreferrer"
                onClick={sendAnalytics('Github')}
            >
                <i className="icon-github" />
            </a>
        </IconListItem>
        <IconListItem>
            <a
                role="button"
                aria-label="linked in"
                href="https://www.linkedin.com/in/emile-choghi-a6b60ba1/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={sendAnalytics('LinkedIn')}
            >
                <i className="icon-linkedin" />
            </a>
        </IconListItem>
        <IconListItem>
            <a
                role="button"
                aria-label="angel list"
                href="https://angel.co/emile-choghi"
                target="_blank"
                rel="noopener noreferrer"
                onClick={sendAnalytics('Angellist')}
            >
                <i className="icon-angel" />
            </a>
        </IconListItem>
    </LinkWrapper>
);

export default SocialLinks;
