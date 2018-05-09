import React from 'react';
import ReactGA from 'react-ga';
import IconButton from 'material-ui/IconButton';

class Footer extends React.PureComponent {
    renderFooterClass() {
        const { fixed, type } = this.props;

        if (fixed) {
            if (type === 'portfolio') {
                return 'footer footer__portfolio fixed';
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
                        <li>
                            <IconButton
                                aria-label="github"
                                component="a"
                                color="primary"
                                href="https://github.com/echoghi"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => this.sendAnalytics('Github')}
                            >
                                <i className="icon-github" />
                            </IconButton>
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
