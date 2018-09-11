import React, { PureComponent } from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';

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

class Footer extends PureComponent {
    renderFooterClass() {
        const { fixed, type } = this.props;

        if (fixed) {
            if (type === 'portfolio') {
                return 'footer footer__portfolio';
            } else {
                return 'footer fixed';
            }
        } else {
            return 'footer';
        }
    }

    sendAnalytics(site) {
        if (NODE_ENV === 'production') {
            ReactGA.event({
                category: 'Footer Link',
                action: 'Social Media Link Click',
                label: `Navigated to ${site} Profile`
            });
        }
    }

    render() {
        return (
            <div className={this.renderFooterClass()}>
                <div className="footer__wrapper">
                    <div className="footer__text">© 2018 Emile Choghi</div>
                    <div className="social-links">
                        <IconListItem>
                            <a
                                role="button"
                                aria-label="github"
                                href="https://github.com/echoghi"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => this.sendAnalytics('Github')}
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
                                onClick={() => this.sendAnalytics('LinkedIn')}
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
                                onClick={() => this.sendAnalytics('Angellist')}
                            >
                                <i className="icon-angel" />
                            </a>
                        </IconListItem>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
