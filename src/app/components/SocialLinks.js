import React from 'react';
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

    a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        width: 48px;
        color: rgba(0, 0, 0, 0.54);
        height: 48px;
        padding: 0;
        font-size: 1.5rem;
        text-align: center;
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
            box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        text-decoration: none;
        border-radius: 50%;
        background-color: transparent;
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
        outline: none;

        &:hover {
            background-color: rgba(0, 0, 0, 0.08);
        }
    }
`;

const SocialLinks = ({ sendAnalytics }) => (
    <LinkWrapper>
        <IconListItem>
            <a
                role="button"
                aria-label="github"
                href="https://github.com/echoghi"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sendAnalytics('Github')}
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
                onClick={() => sendAnalytics('LinkedIn')}
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
                onClick={() => sendAnalytics('Angellist')}
            >
                <i className="icon-angel" />
            </a>
        </IconListItem>
    </LinkWrapper>
);

export default SocialLinks;
