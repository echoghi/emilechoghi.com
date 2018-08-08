import React from 'react';
// Components
import Footer from './Footer';
import Project from './Project';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const PortfolioWrapper = styled.div`
    padding-bottom: 120px;
    font-family: 'Varela Round';
    margin-top: 80px;
    overflow: auto;

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

const ProjectWrapper = styled.div`
    text-align: center;
    padding: 130px 85px 0;
    margin: 0 auto;

    @media (max-width: 1199px) and (min-width: 1024px) {
        display: block;
        padding: 50px 0;
    }

    @media (max-width: 1023px) {
        display: block;
        padding: 50px 0;
    }

    @media (max-width: 768px) {
        padding: 50px 0;
    }
`;

const Filter = styled.div`
    box-sizing: border-box;
    width: 100%;
    z-index: 4;
    position: fixed;
    min-height: 65px;
    background: rgb(255, 255, 255);
    border-bottom: 1px solid rgb(219, 219, 219);
    padding: 16px 110px;

    @media (max-width: 1025px) {
        display: none;
    }
`;

const FilterButton = styled.button`
    font-size: 14px;
    margin: 0 5px;
    line-height: 18px;
    letter-spacing: normal;
    padding: 6px 12px;
    color: rgb(72, 72, 72);
    cursor: pointer;
    display: inline-block;
    position: relative;
    text-align: center;
    width: auto;
    background: none;
    border: 1px solid rgb(220, 224, 224);
    border-image: initia;
    border-radius: 4px;
    text-decoration: none;
    transition: 0.1s all ease;

    &.active {
        background: #269bda;
        color: #fff;
        border: 1px solid #269bda;

        &:hover {
            background: #269bda;
            color: #fff;
            border: 1px solid #269bda;
            opacity: 0.8;
        }
    }

    &:hover {
        background: rgb(242, 242, 242);
        border-color: rgb(242, 242, 242);
    }

    &:first-child {
        margin-left: 0;
    }
`;

class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        // prettier-ignore
        this.state = {
            loading: true,
            error: null,
            filter: {
                all: {
                    name: 'All',
                    active: true
                },
                angular: {
                    name: 'Angular',
                    active: false
                },
                react: {
                    name: 'React',
                    active: false
                },
                redux: {
                    name: 'Redux',
                    active: false
                },
                webpack: {
                    name: 'Webpack',
                    active: false
                },
                scss: {
                    name: 'SCSS',
                    active: false
                },
                firebase: {
                    name: 'Firebase',
                    active: false
                },
                node: {
                    name: 'Node',
                    active: false
                },
                php: {
                    name: 'PHP',
                    active: false
                }
            },
            projects: [
                {
                    title: 'Doctor.com ReviewHub',
                    color: '#27BCBB',
                    text:
                        'A kiosk application designed to run on a chromebook in the waiting room of a healthcare provider\'s office for patients to review their doctor post-appointment. This single page app features functionality to intercept reviews made offline, store them in the browser\'s Local Storage and send them in bulk upon resuming internet connectivity.',
                    image: 'https://res.cloudinary.com/dp7726gkk/image/upload/c_scale,w_715/v1533608486/portfolio/reviewhub.png',
                    link: 'https://www.doctor.com/solutions/reviewhub',
                    tech: [
                        {
                            key: 0,
                            label: 'Angular'
                        },
                        {
                            key: 1,
                            label: 'SCSS'
                        },
                        {
                            key: 2,
                            label: 'PHP'
                        }
                    ],
                    key: 0
                },
                {
                    title: 'Doughboy.io',
                    color: '#ed5454',
                    text:
                        'A health app that enables you to log your daily meals, exercises, and observations all in one convenient dashboard. Your nutritional intake is measured against your estimated caloric expenditure each day to help you identify trends in your diet, mood, and overall well being.',
                    image: 'https://res.cloudinary.com/dp7726gkk/image/upload/c_scale,w_715/v1533608483/portfolio/dashboard.png',
                    link: 'https://doughboy.io',
                    tech: [
                        {
                            key: 0,
                            label: 'React'
                        },
                        {
                            key: 1,
                            label: 'Redux'
                        },
                        {
                            key: 2,
                            label: 'Webpack'
                        },
                        {
                            key: 3,
                            label: 'Firebase'
                        }
                    ],
                    key: 1
                },
                {
                    title: 'Doctor.com Provider Admin',
                    color: '#364343',
                    text: 'An administrative dashboard where healthcare providers can track their listings, reviews, appointments, and overall reputation.',
                    image: 'https://res.cloudinary.com/dp7726gkk/image/upload/c_scale,w_715/v1533608484/portfolio/padm.png',
                    link: 'https://www.doctor.com/solutions/universal-scheduling',
                    tech: [
                        {
                            key: 0,
                            label: 'React'
                        },
                        {
                            key: 1,
                            label: 'Redux'
                        },
                        {
                            key: 2,
                            label: 'Webpack'
                        }
                    ],
                    key: 2
                },
                {
                    title: 'emilechoghi.com',
                    color: '#269bda',
                    text: 'This website, which runs on a modest node server and relays messages to my email.',
                    image: 'https://res.cloudinary.com/dp7726gkk/image/upload/c_scale,w_715/v1533608482/portfolio/choghi.png',
                    link: 'https://github.com/echoghi/emilechoghi.com',
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

    filterByStack(stack) {
        const { filter } = this.state;
        let active = false;

        if (filter.all.active) {
            return true;
        } else {
            for (let j in filter) {
                for (let i = 0; i < stack.length; i++) {
                    if (stack[i].label === filter[j].name && filter[j].active) {
                        return true;
                    }
                }
            }
        }

        return active;
    }

    renderProjects() {
        const { projects } = this.state;
        let portfolio = [];

        projects.map(p => {
            if (this.filterByStack(p.tech)) {
                portfolio.push(
                    <Project
                        title={p.title}
                        stack={p.tech}
                        color={p.color}
                        description={p.text}
                        key={p.key}
                        image={p.image}
                        link={p.link}
                        active
                    />
                );
            }
        });

        return portfolio;
    }

    handleFilterClass(active) {
        if (active) {
            return 'active';
        }
    }

    handleFilterClick = item => {
        const { filter } = this.state;

        for (let i in filter) {
            if (filter[i].name === item) {
                filter[i].active = true;
            } else {
                filter[i].active = false;
            }
        }

        this.setState({ filter });
    };

    renderFilterButtons() {
        const { filter } = this.state;
        let buttons = [];

        for (let i in filter) {
            const button = filter[i];

            buttons.push(
                <FilterButton
                    onClick={() => this.handleFilterClick(button.name)}
                    className={this.handleFilterClass(button.active)}
                    key={button.name}
                >
                    {button.name}
                </FilterButton>
            );
        }

        return buttons;
    }

    render() {
        return (
            <div>
                <Helmet>
                    <link rel="canonical" href="https://emilechoghi.com/portfolio" />
                </Helmet>
                <PortfolioWrapper className="portfolio">
                    <Filter>{this.renderFilterButtons()}</Filter>
                    <div className="clearfix" />

                    <ProjectWrapper>{this.renderProjects()}</ProjectWrapper>
                </PortfolioWrapper>

                <Footer type="portfolio" />
            </div>
        );
    }
}

export default Portfolio;
