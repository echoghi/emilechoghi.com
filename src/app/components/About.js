import React from 'react';
import styled from 'styled-components';
// Components
import Footer from './Footer';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

const AboutWrapper = styled.div`
    font-family: 'Varela Round';
`;

const Tagline = styled.div`
    padding: 100px;
    font-weight: 300;
    max-width: 700px;
    font-size: 2.5rem;
    line-height: 1.5;

    @media (max-width: 1199px) and (min-width: 1024px) {
        padding: 150px 100px;
    }

    @media (max-width: 768px) {
        padding: 125px 15px 45px;
        font-size: 2rem;
        border-bottom: 1px solid rgb(219, 219, 219);
    }
`;

const Content = styled.div`
    padding: 85px;
    margin: 0 auto;

    @media (max-width: 1199px) and (min-width: 1024px) {
        display: block;
        padding: 0;
    }

    @media (max-width: 1023px) {
        display: block;
        padding: 0;
    }

    @media (max-width: 768px) {
        padding: 0;
    }
`;

const Section = styled.section`
    padding: 80px 170px;
    display: flex;
    justify-content: center;

    @media (max-width: 1199px) and (min-width: 1024px) {
        padding: 0 130px 70px;
        justify-content: center;
    }

    @media (max-width: 1023px) {
        justify-content: center;
    }

    @media (max-width: 768px) {
        padding: 50px 20px ${props => (props.skills ? '100px' : 0)};
        display: block;
    }
`;

const SectionTitle = styled.div`
    text-align: right;
    margin-right: 70px;
    font-size: 16px;
    color: #269bda;
    width: 200px;
    font-weight: 700;
    letter-spacing: 2px;

    @media (max-width: 768px) {
        text-align: left;
    }
`;

const SectionBody = styled.div`
    font-size: 1rem;
    line-height: 2;
    width: 100%;
    max-width: 650px;

    a {
        font-weight: 700;

        &:hover {
            color: #269bda;
        }
    }

    @media (max-width: 768px) {
        width: unset;
        padding: 15px 20px;
    }
`;

const Skills = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        display: block;
    }
`;

const Skill = styled.div`
    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            margin: 3px 0;
            font-size: 0.9rem;
        }
    }

    @media (max-width: 768px) {
        display: inline-block;
        vertical-align: text-top;
        width: 43%;
        margin-top: ${props => (props.padding ? '10px' : 0)};
    }
`;

const SkillTitle = styled.div`
    font-weight: 700;
    color: #36363c;
    text-transform: uppercase;
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
                <Content>
                    <Tagline>
                        I'm <b>Emile Choghi</b>, a design-oriented front end software engineer focused on building
                        beautiful interfaces & experiences
                    </Tagline>
                    <Section>
                        <SectionTitle>Background</SectionTitle>
                        <SectionBody>
                            I'm currently a front end engineer at{' '}
                            <a href="https://doctor.com" target="_blank" rel="noopener noreferrer">
                                Doctor.com
                            </a>{' '}
                            building web apps with some awesome people. As an engineer, I enjoy exploring the complex
                            relationship between engineering and design — combining my technical expertise with my keen
                            eye for design to create beautiful products. My goal is to always build applications that
                            are scalable and efficient under the hood while providing engaging, pixel-perfect user
                            experiences. When I'm not in front of a computer screen, I'm probably playing basketball,
                            flying my drones, or hanging out at the beach.
                        </SectionBody>
                    </Section>
                    <Section skills>
                        <SectionTitle>Skills</SectionTitle>
                        <SectionBody>
                            <Skills>
                                <Skill>
                                    <SkillTitle>Languages</SkillTitle>
                                    <ul>
                                        <li>Javascript (ES7)</li>
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                    </ul>
                                </Skill>
                                <Skill>
                                    <SkillTitle>Libraries</SkillTitle>
                                    <ul>
                                        <li>React</li>
                                        <li>Angular 1.x</li>
                                        <li>jQuery</li>
                                        <li>Bootstrap</li>
                                        <li>Node & Express</li>
                                    </ul>
                                </Skill>
                                <Skill padding>
                                    <SkillTitle>Tools</SkillTitle>
                                    <ul>
                                        <li>Git & Github</li>
                                        <li>Webpack</li>
                                        <li>Gulp</li>
                                        <li>VS Code</li>
                                        <li>PHP Storm</li>
                                    </ul>
                                </Skill>
                                <Skill padding>
                                    <SkillTitle>Design</SkillTitle>
                                    <ul>
                                        <li>Adobe Photoshop</li>
                                        <li>Zeplin</li>
                                        <li>Invision</li>
                                    </ul>
                                </Skill>
                            </Skills>
                        </SectionBody>
                    </Section>
                </Content>

                <Footer />
            </AboutWrapper>
        );
    }
}

export default About;
