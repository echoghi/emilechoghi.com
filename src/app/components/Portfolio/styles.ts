import styled from 'styled-components';
import theme from '../../theme';

const PortfolioWrapper = styled.div`
    padding-bottom: 120px;
    font-family: ${theme.fonts.primary};
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

const ProjectWrapper = styled.ul`
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
    background: ${theme.colors.white};
    border-bottom: 1px solid ${theme.colors.borderGrey};
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
    color: ${theme.colors.black};
    cursor: pointer;
    display: inline-block;
    position: relative;
    text-align: center;
    width: auto;
    background: none;
    border: 1px solid ${theme.colors.borderGrey};
    border-radius: 4px;
    text-decoration: none;
    transition: 0.1s all ease;

    &.active {
        background: ${theme.colors.blue};
        color: #fff;
        border: 1px solid ${theme.colors.blue};

        &:hover {
            background: ${theme.colors.blue};
            color: ${theme.colors.white};
            border: 1px solid ${theme.colors.blue};
            opacity: 0.8;
        }
    }

    &:hover {
        background: ${theme.colors.hoverGreyAlt};
        border-color: ${theme.colors.hoverGreyAlt};
    }

    &:first-child {
        margin-left: 0;
    }
`;

const ListItem = styled.li`
    display: inline-block;
    box-sizing: border-box;
    list-style: none;
    padding: 0 10px;
    vertical-align: top;
    width: 33%;

    @media (min-width: 1200px) {
        &:nth-child(4) {
            float: left;
        }
    }

    @media (max-width: 1199px) and (min-width: 1024px) {
        display: inline-block;
        width: 50%;
        padding: 15px;

        &:nth-child(3) {
            float: left;
        }
    }

    @media (max-width: 1023px) {
        display: inline-block;
        width: 50%;
        padding: 0 20px 20px 20px;

        &:nth-child(odd) {
            padding-right: 10px;
        }

        &:nth-child(even) {
            padding-left: 10px;
        }

        &:nth-child(3) {
            float: left;
        }
    }

    @media (max-width: 600px) {
        display: flex;
        width: 100%;

        &:nth-child(even),
        &:nth-child(odd) {
            padding: 0 20px 20px 20px;
        }
    }
`;

const PortfolioLink = styled.a`
    display: block;
`;

const PortfolioItem = styled.div`
    margin: 2px;
    display: inline-block;
    border-radius: 2px;
    height: auto;
    width: auto;
    box-shadow: none;
    transition: all 0.3s;
    background: ${theme.colors.white};

    &:hover {
        transition: all.3s;
        cursor: pointer;
    }

    &:first-child {
        margin: 2px 0;
    }

    @media (max-width: 1023px) {
        display: inline-block;
    }
`;

const ImageWrapper = styled.div`
    height: auto;
    width: 100%;
    border-radius: 3px;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    z-index: 1;

    img {
        height: 100%;
        width: 100%;
        transition: all 0.3s ease-in-out;
    }
`;

const Image = styled.div`
    display: inline-block;
    height: 100%;
    width: 100%;
`;

const Stack = styled.div`
    text-transform: uppercase;
    font-size: 14px;
`;

const Label = styled.span`
    padding-right: 5px;
    font-weight: 700;
    color: rgb(155, 49, 67);
`;

const Info = styled.span`
    text-align: left;
    padding: 20px;
    font-family: ${theme.fonts.primary};
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 17px;
    padding-top: 10px;
`;

const Text = styled.div`
    text-align: left;
    padding: 5px 0;
    font-family: ${theme.fonts.primary};
`;

export {
    PortfolioWrapper,
    ProjectWrapper,
    Filter,
    FilterButton,
    ListItem,
    PortfolioItem,
    PortfolioLink,
    Text,
    Title,
    Info,
    Label,
    Stack,
    Image,
    ImageWrapper
};
