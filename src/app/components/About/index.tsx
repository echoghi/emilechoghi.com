import React from 'react';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import {
    Skill,
    SkillTitle,
    Section,
    SectionBody,
    SectionTitle,
    Skills,
    Content,
    Tagline,
    AboutWrapper
} from './styles';
// Components
import Footer from '../Footer';

function About() {
    const [mounted, onMount] = React.useState(false);

    React.useEffect(() => {
        if (!mounted) {
            if (NODE_ENV === 'production') {
                // @ts-ignore
                ReactGA.ga('send', 'pageview', '/');
            }

            window.scrollTo(0, 0);
            onMount(true);
        }
    }, [mounted]);

    return (
        <AboutWrapper>
            <Helmet
                title="Emile Choghi"
                meta={[
                    {
                        content:
                            'Frontend software engineer based in Los Angeles who specializes in developing high-quality web sites and applications.',
                        name: 'description'
                    }
                ]}
                link={[
                    {
                        href: 'https://emilechoghi.com/',
                        rel: 'canonical'
                    }
                ]}
            />

            <Content>
                <Tagline>
                    I'm <b>Emile Choghi</b>, a front end engineer focused on building beautiful
                    interfaces & experiences
                </Tagline>
                <Section>
                    <SectionTitle>Background</SectionTitle>
                    <SectionBody>
                        I'm currently a front end engineer at{' '}
                        <a href="https://doctor.com" target="_blank" rel="noopener noreferrer">
                            Doctor.com
                        </a>{' '}
                        building consumer facing web apps with some awesome people. As an engineer,
                        I enjoy exploring the complex relationship between engineering and design —
                        combining my technical expertise with my keen attention to detail to create
                        beautiful products. My goal is to always build applications that are
                        scalable and efficient under the hood while providing seamless,
                        pixel-perfect user experiences. When I'm not in front of a computer screen,
                        I'm probably playing basketball, flying my drones, or hanging out at the
                        beach.
                    </SectionBody>
                </Section>
                <Section skills={true}>
                    <SectionTitle>Skills</SectionTitle>
                    <SectionBody>
                        <Skills>
                            <Skill>
                                <SkillTitle>Languages</SkillTitle>
                                <ul>
                                    <li>JavaScript (ES6)</li>
                                    <li>TypeScript</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </Skill>
                            <Skill>
                                <SkillTitle>Libraries</SkillTitle>
                                <ul>
                                    <li>React</li>
                                    <li>AngularJS</li>
                                    <li>jQuery</li>
                                    <li>Bootstrap</li>
                                    <li>Node & Express</li>
                                </ul>
                            </Skill>
                            <Skill padding={true}>
                                <SkillTitle>Tools</SkillTitle>
                                <ul>
                                    <li>Git & Github</li>
                                    <li>Webpack</li>
                                    <li>ESLint</li>
                                    <li>Prettier</li>
                                    <li>VS Code</li>
                                </ul>
                            </Skill>
                            <Skill padding={true}>
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

export default React.memo(About);
