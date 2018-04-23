import React from 'react';
import { connect } from 'react-redux';
// Components
import Footer from './Footer';
import Project from './Project';
import ReactGA from 'react-ga';
import styled from 'styled-components';
// Images
import dashboardImg from '../assets/images/dashboard.png';
import pidashImg from '../assets/images/pidash.png';
import homeImg from '../assets/images/choghi.png';

const mapStateToProps = state => ({
    previousRoute: state.portfolioState.previousRoute
});

class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            error: null,
            projects: [
                {
                    title: 'Health Dashboard',
                    text:
                        'A health app designed to log and analyze your daily nutritional intake against your daily expenditure (via the apple watch) to track trends and caloric surpluses/defecits on a monthly basis.',
                    image: dashboardImg,
                    link: 'https://github.com/echoghi/calorie-tracker',
                    tech: [
                        {
                            key: 0,
                            label: 'React'
                        },
                        {
                            key: 1,
                            label: 'Webpack'
                        },
                        {
                            key: 2,
                            label: 'SCSS'
                        },
                        {
                            key: 3,
                            label: 'Firebase'
                        }
                    ],
                    key: 0
                },
                {
                    title: 'PiDash',
                    text:
                        'A kiosk app made to run on a RaspberryPi, showing a newsfeed, cryptocurrency price ticker, weather forecast, and estimated commute time.',
                    image: pidashImg,
                    link: 'https://github.com/echoghi/PiDash',
                    tech: [
                        {
                            key: 0,
                            label: 'React'
                        },
                        {
                            key: 1,
                            label: 'Webpack'
                        },
                        {
                            key: 2,
                            label: 'SCSS'
                        },
                        {
                            key: 3,
                            label: 'Node'
                        }
                    ],
                    key: 2
                },
                {
                    title: 'emilechoghi.com',
                    text: 'This website, which runs on a modest node server and relays messages to my email.',
                    image: homeImg,
                    link: 'https://github.com/echoghi/emilechoghi.com',
                    tech: [
                        {
                            key: 0,
                            label: 'React'
                        },
                        {
                            key: 1,
                            label: 'Styled Components'
                        },
                        {
                            key: 2,
                            label: 'Webpack'
                        },
                        {
                            key: 3,
                            label: 'Node'
                        }
                    ],
                    key: 3
                }
            ]
        };

        window.scrollTo(0, 0);
    }

    componentDidMount() {
        if (NODE_ENV === 'production') {
            ReactGA.ga('send', 'pageview', '/portfolio');
        }
    }

    renderProjects() {
        let portfolio = [];

        _.map(this.state.projects, p => {
            portfolio.push(
                <Project
                    title={p.title}
                    stack={p.tech}
                    description={p.text}
                    key={p.key}
                    image={p.image}
                    link={p.link}
                />
            );
        });

        return portfolio;
    }

    render() {
        const Portfolio = styled.div`
            height: 80vh;
            padding: 0 70px;
            font-family: 'Varela Round';
            margin-top: 80px;

            @media (max-width: 1199px) and (min-width: 1024px) {
                height: auto;
                padding: 0 30px 30px 30px;
            }

            @media (max-width: 1023px) {
                height: auto;
                padding: 0;
                padding-bottom: 30px;
            }
        `;

        const PortfolioWrapper = styled.div`
            text-align: center;
            margin: 0 auto;

            @media (max-width: 1199px) and (min-width: 1024px) {
                display: block;
            }

            @media (max-width: 1023px) {
                display: block;
            }

            @media (max-width: 768px) {
                padding: 0;
            }
        `;

        const Header = styled.h4`
            font-size: 28px;
            font-weight: bold;
            padding: 15px;
        `;

        return (
            <div>
                <Portfolio className="portfolio">
                    <div className="clearfix" />

                    <Header>Recent Projects</Header>

                    <PortfolioWrapper>{this.renderProjects()}</PortfolioWrapper>
                </Portfolio>

                <Footer fixed type="portfolio" />
            </div>
        );
    }
}

export default connect(mapStateToProps)(Portfolio);
