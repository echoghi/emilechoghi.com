import React, { useState, useEffect, Fragment } from 'react';
// Components
import Footer from '../Footer';
import Project from './Project';
import ReactGA from 'react-ga';
// Project Images
import reviewhub from '../../assets/images/reviewhub.png';
import padm from '../../assets/images/padm.png';
import doughboy from '../../assets/images/dashboard.png';
import choghi from '../../assets/images/choghi.png';
import { Flipper } from 'react-flip-toolkit';
import { PortfolioWrapper, ProjectWrapper, Filter, FilterButton } from './Portfolio.styles';

// prettier-ignore
const projects = [
    {
        title: 'Doctor.com ReviewHub',
        color: '#27BCBB',
        text:
            'A kiosk application designed to run on a chromebook in the waiting room of a healthcare provider\'s office for patients to review their doctor post-appointment. This single page app features functionality to intercept reviews made offline, store them in the browser\'s Local Storage and send them in bulk upon resuming internet connectivity.',
        image: reviewhub,
        link: 'https://www.doctor.com/solutions/reviewhub',
        tech: ['Angular', 'SCSS', 'PHP']
    },
    {
        title: 'Doughboy.io',
        color: '#ed5454',
        text:
            'A health app that enables you to log your daily meals, exercises, and observations all in one convenient dashboard. Your nutritional intake is measured against your estimated caloric expenditure each day to help you identify trends in your diet, mood, and overall well being.',
        image: doughboy,
        link: 'https://doughboy.io',
        tech: ['React', 'Redux', 'Webpack', 'Firebase']
    },
    {
        title: 'Doctor.com Provider Admin',
        color: '#364343',
        text:
            'An administrative dashboard where healthcare providers can track their listings, reviews, appointments, and overall reputation.',
        image: padm,
        link: 'https://www.doctor.com/solutions/universal-scheduling',
        tech: ['React', 'Redux', 'Webpack']
    },
    {
        title: 'emilechoghi.com',
        color: '#269bda',
        text: 'This website, which runs on a modest node server and relays messages to my email.',
        image: choghi,
        link: 'https://github.com/echoghi/emilechoghi.com',
        tech: ['React', 'Webpack', 'Node']
    }
];

const stack = ['All', 'Angular', 'React', 'Redux', 'Webpack', 'SCSS', 'Firebase', 'Node', 'PHP'];

const Portfolio = () => {
    const [filter, handleFilterClick] = useState('All');
    const [mounted, onMount] = useState(false);

    function renderFilterButtons() {
        let buttons = [];

        for (let i in stack) {
            const button = stack[i];

            buttons.push(
                <FilterButton
                    onClick={() => handleFilterClick(button)}
                    className={handleFilterClass(button)}
                    key={button}
                >
                    {button}
                </FilterButton>
            );
        }

        return buttons;
    }

    function renderProjects() {
        let portfolio = [];

        projects.map(p => {
            if (filterByStack(p.tech)) {
                portfolio.push(
                    <Project
                        key={p.title}
                        title={p.title}
                        stack={p.tech}
                        color={p.color}
                        description={p.text}
                        image={p.image}
                        link={p.link}
                        active
                    />
                );
            }
        });

        return portfolio;
    }

    function filterByStack(stack) {
        if (filter === 'All') {
            return true;
        } else {
            return stack.includes(filter);
        }
    }

    function handleFilterClass(name) {
        if (name === filter) {
            return 'active';
        }
    }

    // onMount logic
    useEffect(
        () => {
            if (!mounted) {
                // prettier-ignore
                document.title = 'Emile Choghi\'s Portfolio';

                if (NODE_ENV === 'production') {
                    ReactGA.ga('send', 'pageview', '/portfolio');
                }

                window.scrollTo(0, 0);
                onMount(true);
            }
        },
        [mounted]
    );

    return (
        <Fragment>
            <PortfolioWrapper>
                <Filter>{renderFilterButtons()}</Filter>

                <ProjectWrapper>
                    <Flipper flipKey={renderProjects().length} spring="gentle">
                        {renderProjects()}
                    </Flipper>
                </ProjectWrapper>
            </PortfolioWrapper>

            <Footer type="portfolio" />
        </Fragment>
    );
};

export default Portfolio;
