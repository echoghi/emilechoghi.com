import React from 'react';
import ReactGA from 'react-ga';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';

const LinkWrapper = styled.div`
    display: block;
    position: fixed;
    bottom: 20px;
    right: 20px;
    text-align: center;
    padding: 5px 16px;
    width: auto;
    font-size: 14px;
    line-height: 18px;
    font-weight: normal;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 9px 3px;
    color: rgb(72, 72, 72);
    margin: 0px;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    background: rgb(255, 255, 255);
    border-color: transparent;

    @media (max-width: 1025px) {
        display: none;
    }
`;

const IconListItem = styled.li`
    display: inline-block;
    list-style: none;
`;

class SocialLinks extends React.PureComponent {
    sendAnalytics(site) {
        if (NODE_ENV === 'production') {
            ReactGA.event({
                category: 'Social Link Bar',
                action: 'Social Media Link Click',
                label: `Navigated to ${site} Profile`
            });
        }
    }

    render() {
        return (
            <LinkWrapper>
                <IconListItem>
                    <IconButton
                        aria-label="github"
                        component="a"
                        href="https://github.com/echoghi"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => this.sendAnalytics('Github')}
                    >
                        <i className="icon-github" />
                    </IconButton>
                </IconListItem>
                <IconListItem>
                    <IconButton
                        component="a"
                        aria-label="linked in"
                        href="https://www.linkedin.com/in/emile-choghi-a6b60ba1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => this.sendAnalytics('LinkedIn')}
                    >
                        <i className="icon-linkedin" />
                    </IconButton>
                </IconListItem>
                <IconListItem>
                    <IconButton
                        component="a"
                        aria-label="angel list"
                        href="https://angel.co/emile-choghi"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => this.sendAnalytics('Angellist')}
                    >
                        <i className="icon-angel" />
                    </IconButton>
                </IconListItem>
            </LinkWrapper>
        );
    }
}

export default SocialLinks;
