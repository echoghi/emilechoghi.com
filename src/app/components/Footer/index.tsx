import * as React from 'react';
import * as ReactGA from 'react-ga';
import { IconListItem, Container, Wrapper, Links, Link, Text } from './styles';

function sendAnalytics(site: string) {
    if (NODE_ENV === 'production') {
        ReactGA.event({
            category: 'Footer Link',
            action: 'Social Media Link Click',
            label: `Navigated to ${site} Profile`
        });
    }
}

interface FooterProps {
    fixed?: boolean;
}

const Footer: React.FunctionComponent<FooterProps> = ({ fixed }) => (
    <Container fixed={fixed}>
        <Wrapper>
            <Text>© {new Date().getFullYear()} Emile Choghi</Text>
            <Links>
                <IconListItem>
                    <Link
                        role="button"
                        aria-label="github"
                        href="https://github.com/echoghi"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sendAnalytics('Github')}
                    >
                        <i className="icon-github" />
                    </Link>
                </IconListItem>
                <IconListItem>
                    <Link
                        role="button"
                        aria-label="linked in"
                        href="https://www.linkedin.com/in/emile-choghi-a6b60ba1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sendAnalytics('LinkedIn')}
                    >
                        <i className="icon-linkedin" />
                    </Link>
                </IconListItem>
                <IconListItem>
                    <Link
                        role="button"
                        aria-label="angel list"
                        href="https://angel.co/emile-choghi"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sendAnalytics('Angellist')}
                    >
                        <i className="icon-angel" />
                    </Link>
                </IconListItem>
            </Links>
        </Wrapper>
    </Container>
);

export default Footer;
