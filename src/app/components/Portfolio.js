import React from 'react';
import { connect } from 'react-redux';
// Components
import Footer from './Footer';
import Project from './Project';
import Anime from 'react-anime';
import ReactGA from 'react-ga';
// Images
import weddingImg from '../assets/images/wedding.png';
import dashboardImg from '../assets/images/dashboard.png';
import pidashImg from '../assets/images/pidash.png';
import homeImg from '../assets/images/choghi.png';

const mapStateToProps = state => ({
    previousRoute: state.portfolioState.previousRoute
});

class Portfolio extends React.Component {
    /* eslint-disable */
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            error: null,
            projects: [
                {
                    title: 'Health Dashboard',
                    date: 'January 15th, 2018',
                    text: 'An admin app to analyze nutrition and fitness data using React + Firebase.',
                    image: dashboardImg,
                    link: null,
                    tech: [
                        {
                            key: 0,
                            label: 'React.js',
                            class: 'icon-react',
                            id: 'icon-6'
                        },
                        {
                            key: 1,
                            label: 'Webpack',
                            class: 'icon-webpack',
                            id: 'icon-7'
                        },
                        {
                            key: 2,
                            label: 'SCSS',
                            class: 'icon-scss',
                            size: 30,
                            id: 'icon-8'
                        }
                    ],
                    key: 0
                },
                {
                    title: 'Choghi Wedding',
                    date: 'October 5th, 2016',
                    text: "A site for my brother's wedding, featuring an itinerary, photos, and guestbook.",
                    image: weddingImg,
                    link: 'http://choghiwedding.com',
                    tech: [
                        {
                            key: 0,
                            label: 'Angular.js',
                            class: 'icon-angular',
                            id: 'icon-1'
                        },
                        { key: 1, label: 'SCSS', class: 'icon-scss', id: 'icon-2' },
                        {
                            key: 2,
                            label: 'Node.js',
                            class: 'icon-node',
                            id: 'icon-3'
                        }
                    ],
                    key: 1
                },
                {
                    title: 'PiDash',
                    date: 'July 2nd, 2017',
                    text: 'A dashboard app meant to serve as a kiosk display running on my Raspberry Pi.',
                    image: pidashImg,
                    link: 'https://github.com/echoghi/PiDash',
                    tech: [
                        {
                            key: 0,
                            label: 'React.js',
                            class: 'icon-react',
                            id: 'icon-6'
                        },
                        {
                            key: 1,
                            label: 'Webpack',
                            class: 'icon-webpack',
                            id: 'icon-7'
                        },
                        {
                            key: 2,
                            label: 'SCSS',
                            class: 'icon-scss',
                            size: 30,
                            id: 'icon-8'
                        },
                        {
                            key: 3,
                            label: 'Node.js',
                            class: 'icon-node',
                            id: 'icon-9'
                        }
                    ],
                    key: 2
                },
                {
                    title: 'emilechoghi.com',
                    date: 'July 2nd, 2017',
                    text: 'This website, which runs on a modest node server and relays messages to my email.',
                    image: homeImg,
                    link: 'https://github.com/echoghi/emilechoghi.com',
                    tech: [
                        {
                            key: 0,
                            label: 'React.js',
                            class: 'icon-react',
                            id: 'icon-6'
                        },
                        {
                            key: 1,
                            label: 'Webpack',
                            class: 'icon-webpack',
                            id: 'icon-7'
                        },
                        {
                            key: 2,
                            label: 'SCSS',
                            class: 'icon-scss',
                            size: 30,
                            id: 'icon-8'
                        },
                        {
                            key: 3,
                            label: 'Node.js',
                            class: 'icon-node',
                            id: 'icon-9'
                        }
                    ],
                    key: 3
                }
            ]
        };

        window.scrollTo(0, 0);
    }
    /* eslint-enable */

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
                    date={p.date}
                    description={p.text}
                    key={p.key}
                    chips={p.tech}
                    image={p.image}
                    link={p.link}
                />
            );
        });

        return portfolio;
    }

    render() {
        let transition = {
            delay: (el, index) => index * 240,
            elasticity: 0,
            duration: 1000,
            opacity: [0, 1],
            translateX: [-200, 0]
        };

        if (this.props.previousRoute === '/about' || this.props.previousRoute === '/') {
            transition.translateX = [200, 0];
        }

        return (
            <div>
                <Anime {...transition}>
                    <div className="portfolio">
                        <div className="clearfix" />

                        <h4 className="portfolio__header">Recent Projects</h4>

                        <div className="portfolio__wrapper">{this.renderProjects()}</div>
                    </div>
                </Anime>

                <Footer fixed type="portfolio" />
            </div>
        );
    }
}

export default connect(mapStateToProps)(Portfolio);
