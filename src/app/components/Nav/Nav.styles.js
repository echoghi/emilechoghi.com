import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.div`
    font-family: 'Varela Round', serif;
    background: #fff;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    width: 100%;
    box-shadow: none;
    border-bottom: 1px solid rgb(219, 219, 219);
    z-index: 99;

    @media (max-width: 1023px) {
        border-bottom: 0;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
    }
`;

const Container = styled.div`
    position: absolute;
    display: none;
    top: 2px;
    right: 0;
    width: 30px;
    padding: 20px 25px;

    @media (max-width: 767px) {
        display: block;
        z-index: 2;
    }

    div {
        &:first-child {
            top: ${props => (props.open ? '10.5px' : null)};
            transform: ${props => (props.open ? 'rotate(315deg)' : 'none')};
        }

        &:nth-child(2) {
            display: ${props => (props.open ? 'none' : 'block')};
            width: 65%;
        }

        &:last-child {
            top: ${props => (props.open ? '10.5px' : null)};
            transform: ${props => (props.open ? 'rotate(-315deg) translateY(-14px)' : 'none')};
            right: ${props => (props.open ? '10px' : null)};
        }
    }
`;

const Line = styled.div`
    position: relative;
    margin: 7px 0;
    height: 3px;
    background: #269bda;
    border-radius: 5px;
    transition: all 200ms ease-out;
`;

const Link = styled(NavLink)`
    display: inline-block;
    font-size: 16px;
    padding: 8px 16px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    text-decoration: none;
    border-radius: 2px;
    background-color: transparent;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    outline: none;

    span {
        font-family: 'Varela Round', serif;
        text-transform: none;
    }

    i {
        display: none;
    }

    &.active {
        color: #269bda;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }

    @media (max-width: 767px) {
        display: block;
        padding: 20px 10px;
        text-align: left;

        i {
            display: block;
            float: right;
            font-size: 25px;
        }

        &:first-child {
            margin-top: 50px;
            padding: 30px 10px;
            border-bottom: 1px solid #ecf1f6;
        }

        &:nth-child(2) {
            padding-top: 30px;
        }

        &:last-child {
            border-bottom: 1px solid #ecf1f6;
            padding-bottom: 30px;
        }
    }
`;

const Links = styled.ul`
    display: inline-flex;
    list-style: none;
    padding: 10px 15px;
    font-weight: normal;

    @media (max-width: 767px) {
        height: 100vh;
        width: 100vw;
        display: block;
        background: #fff;
        text-align: center;
        transform: ${props => (props.open ? 'scaleX(1)' : 'scaleX(0)')};
        transition: ${props =>
            props.open
                ? 'transform 0.3s cubic-bezier(0.01, 0.03, 0.29, 1.17), opacity 0.2s'
                : 'transform 0.1s cubic-bezier(0.71, 0.02, 0.9, 0.23), opacity 0.1s'};
        transform-origin: right;
    }
`;

const NavBrand = styled.div`
    display: inline-flex;
    font-size: 50px;
    background: #269bda;
    color: #fff;
    width: 50px;
    padding: 15px 30px;

    @media (max-width: 767px) {
        padding: 15px 25px;
        width: 45px;
        z-index: 2;
    }
`;

export { Link, Links, NavBrand, Line, Container, Nav };
