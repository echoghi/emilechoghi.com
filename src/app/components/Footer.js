import React from 'react';
import ReactGA from 'react-ga';

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
                            <a
                                href="https://github.com/echoghi"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => this.sendAnalytics('Github')}
                            >
                                <i className="icon-github" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/emile-choghi-a6b60ba1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => this.sendAnalytics('LinkedIn')}
                            >
                                <i className="icon-linkedin" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://angel.co/emile-choghi"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => this.sendAnalytics('Angellist')}
                            >
                                <i className="icon-angel" />
                            </a>
                        </li>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
