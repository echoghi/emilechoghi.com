import styled from 'styled-components';
import theme from '../../theme';

interface SectionProps {
    skills?: boolean;
}

interface SkillProps {
    padding?: boolean;
}

const AboutWrapper = styled.div`
    font-family: ${theme.fonts.primary};
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
        padding: 125px 20px 45px;
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
        padding: 50px 20px ${(props: SectionProps) => (props.skills ? '100px' : 0)};
        display: block;
    }
`;

const SectionTitle = styled.div`
    text-align: right;
    margin-right: 70px;
    font-size: 16px;
    color: ${theme.colors.blue};
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
            color: ${theme.colors.blue};
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
        width: 50%;
        margin-top: ${(props: SkillProps) => (props.padding ? '10px' : 0)};
    }
`;

const SkillTitle = styled.div`
    font-weight: 700;
    color: ${theme.colors.black};
    text-transform: uppercase;
`;

export {
    Skill,
    SkillTitle,
    Section,
    SectionBody,
    SectionTitle,
    Skills,
    Content,
    Tagline,
    AboutWrapper
};
