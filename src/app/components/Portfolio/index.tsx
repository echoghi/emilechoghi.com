import React from 'react';
// Components
import Footer from '../Footer';
import Project from './Project';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
// Project Images
import reviewhub from '../../assets/images/reviewhub.png';
import padm from '../../assets/images/padm.png';
import doughboy from '../../assets/images/dashboard.png';
import choghi from '../../assets/images/choghi.png';
import { Flipper } from 'react-flip-toolkit';
import { PortfolioWrapper, ProjectWrapper, Filter, FilterButton } from './styles';

interface Project {
    title: string;
    color: string;
    text: string;
    image: any;
    link: string;
    tech: string[];
}

// prettier-ignore
const projects: Project[] = [
    {
        color: '#ed5454',
        image: doughboy,
        link: 'https://doughboy.io',
        tech: ['React', 'Redux', 'TypeScript', 'Webpack', 'Firebase'],
        text:
        'A health app that enables you to log your daily meals, exercises, and observations all in one convenient dashboard. Your nutritional intake is measured against your estimated caloric expenditure each day to help you identify trends in your diet, mood, and overall well being.',
        title: 'Doughboy.io'
    },
    {
        color: '#364343',
        image: padm,
        link: 'https://www.doctor.com/solutions/universal-scheduling',
        tech: ['React', 'Redux', 'TypeScript', 'Webpack'],
        text:
        'An administrative dashboard where healthcare providers can track their listings, reviews, appointments, and overall reputation.',
        title: 'Doctor.com Provider Admin'
    },
    {
        color: '#27BCBB',
        image: reviewhub,
        link: 'https://www.doctor.com/solutions/reviewhub',
        tech: ['Angular', 'SCSS', 'PHP'],
        text:
        'A kiosk application designed to run on a chromebook in the waiting room of a healthcare provider\'s office for patients to review their doctor post-appointment. This single page app features functionality to intercept reviews made offline, store them in the browser\'s Local Storage and send them in bulk upon resuming internet connectivity.',
        title: 'Doctor.com ReviewHub'
    },
    {
        color: '#269bda',
        image: choghi,
        link: 'https://github.com/echoghi/emilechoghi.com',
        tech: ['React', 'TypeScript', 'Webpack'],
        text: 'This website, which runs on a modest node server and relays messages to my email.',
        title: 'emilechoghi.com'
    }
];

const techStack: string[] = [
    'All',
    'Angular',
    'React',
    'Redux',
    'Webpack',
    'SCSS',
    'Firebase',
    'TypeScript',
    'Node',
    'PHP'
];

const Portfolio = React.memo(() => {
    const [filter, handleFilterClick] = React.useState('All');
    const [mounted, onMount] = React.useState(false);

    function renderFilterButtons() {
        const buttons = [];

        for (const tech of techStack) {
            const clickHandler = () => handleFilterClick(tech);

            buttons.push(
                <FilterButton onClick={clickHandler} className={handleFilterClass(tech)} key={tech}>
                    {tech}
                </FilterButton>
            );
        }

        return buttons;
    }

    function renderProjects() {
        const portfolio: JSX.Element[] = [];

        projects.map(p => {
            if (filterByStack(p.tech)) {
                portfolio.push(
                    <Project
                        color={p.color}
                        key={p.title}
                        title={p.title}
                        stack={p.tech}
                        description={p.text}
                        image={p.image}
                        link={p.link}
                    />
                );
            }
        });

        return portfolio;
    }

    function filterByStack(stack: string[]) {
        if (filter === 'All') {
            return true;
        } else {
            return stack.includes(filter);
        }
    }

    function handleFilterClass(name: string) {
        if (name === filter) {
            return 'active';
        }
    }

    // onMount logic
    React.useEffect(() => {
        if (!mounted) {
            if (NODE_ENV === 'production') {
                // @ts-ignore
                ReactGA.ga('send', 'pageview', '/portfolio');
            }

            window.scrollTo(0, 0);
            onMount(true);
        }
    }, [mounted]);

    return (
        <React.Fragment>
            <Helmet
                title="Emile Choghi's Portfolio"
                meta={[
                    {
                        content: 'Professional and side projects from the past year.',
                        name: 'description'
                    }
                ]}
                link={[
                    {
                        href: 'https://emilechoghi.com/portfolio',
                        rel: 'canonical'
                    }
                ]}
            />

            <PortfolioWrapper>
                <Filter>{renderFilterButtons()}</Filter>

                <ProjectWrapper>
                    <Flipper flipKey={renderProjects().length} spring="gentle">
                        {renderProjects()}
                    </Flipper>
                </ProjectWrapper>
            </PortfolioWrapper>

            <Footer />
        </React.Fragment>
    );
});

export default Portfolio;
