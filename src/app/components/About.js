import React from 'react';
import styled from 'styled-components';
// Components
import Footer from './Footer';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const icons = {
    doctor:
        'M 598 256 v -86 h -172 v 86 h 172 Z M 854 256 c 48 0 84 38 84 86 v 468 c 0 48 -36 86 -84 86 h -684 c -48 0 -84 -38 -84 -86 v -468 c 0 -48 36 -86 84 -86 h 172 v -86 c 0 -48 36 -84 84 -84 h 172 c 48 0 84 36 84 84 v 86 h 172 Z',
    freecodecamp:
        'M 622 708 l 198 -196 l -198 -196 l 60 -60 l 256 256 l -256 256 Z M 402 708 l -60 60 l -256 -256 l 256 -256 l 60 60 l -198 196 Z',
    grad:
        'M 512 128 l 470 256 v 342 h -86 v -296 l -384 210 l -470 -256 Z M 214 562 l 298 164 l 298 -164 v 172 l -298 162 l -298 -162 v -172 Z'
};

const Icon = props => (
    <svg width="22" height="22" viewBox="0 0 1024 1024">
        <path d={icons[props.icon]} />
    </svg>
);

const Header = styled.h4`
    font-size: 30px;
    font-weight: normal;
    padding: 15px;
`;

const Skills = styled.div`
    width: 70%;
    margin: 0 auto;

    @media (max-width: 1199px) and (min-width: 1024px) {
        width: 80%;
    }

    @media (max-width: 1023px) {
        width: 85%;
    }
`;

const AboutWrapper = styled.div`
    margin-top: 80px;
    padding-bottom: 80px;
    background: #f4f7f8;
    font-family: 'Varela Round';

    @media (max-width: 1199px) and (min-width: 1024px) {
        padding: 0;
    }

    @media (max-width: 1023px) {
        padding: 0;
    }
`;

class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            error: null
        };

        window.scrollTo(0, 0);
    }

    componentDidMount() {
        if (NODE_ENV === 'production') {
            ReactGA.ga('send', 'pageview', '/about');
        }
    }

    render() {
        return (
            <AboutWrapper>
                <Helmet>
                    <link rel="canonical" href="https://emilechoghi.com/about" />
                </Helmet>
                <div className="clearfix" />
                <Skills>
                    <Header>Where I've worked</Header>
                    <div className="skills__container">
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2016 - present"
                                iconStyle={{
                                    background: '#00BDBD',
                                    color: '#fff',
                                    fill: '#fff'
                                }}
                                icon={<Icon icon="doctor" />}
                            >
                                <h3 className="vertical-timeline-element-title">Frontend Engineer</h3>
                                <h4 className="vertical-timeline-element-subtitle">Doctor.com</h4>
                                <p>
                                    Frontend web and app development with React.js, Webpack, Angular.js 1.x, jQuery, and
                                    Sass.
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2015 - 2016"
                                iconStyle={{
                                    background: '#269bda',
                                    color: '#fff',
                                    fill: '#fff'
                                }}
                                icon={<Icon icon="doctor" />}
                            >
                                <h3 className="vertical-timeline-element-title">Freelance Web Developer</h3>
                                <h4 className="vertical-timeline-element-subtitle">Palo Alto, CA</h4>
                                <p>Fullstack web development with Angular.js 1.x, Node.js, jQuery, and Sass.</p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2015 - 2016"
                                iconStyle={{
                                    background: 'darkgreen',
                                    color: '#fff',
                                    fill: '#fff'
                                }}
                                icon={<Icon icon="freecodecamp" />}
                            >
                                <h3 className="vertical-timeline-element-title">Frontend Development Certification</h3>
                                <h4 className="vertical-timeline-element-subtitle">FreeCodeCamp</h4>
                                <p>User Experience, Visual Design, Javascript, CSS, HTML</p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2012 - 2014"
                                iconStyle={{
                                    background: '#FFC500',
                                    color: '#fff',
                                    fill: '#fff'
                                }}
                                icon={<Icon icon="grad" />}
                            >
                                <h3 className="vertical-timeline-element-title">B.A. Politics</h3>
                                <h4 className="vertical-timeline-element-subtitle">
                                    University of California, Santa Cruz
                                </h4>
                                <p>Sub-Saharan African and Middle Eastern Affairs</p>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </div>
                </Skills>

                <Footer />
            </AboutWrapper>
        );
    }
}

export default About;
