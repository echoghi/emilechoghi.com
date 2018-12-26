import styled from 'styled-components';

const IconListItem = styled.li`
    display: inline-block;
    list-style: none;
    display: inline-block;
    vertical-align: sub;
`;

const Container = styled.div`
    display: none;
    position: ${props => (props.fixed ? 'fixed' : 'relative')};
    background: #fff;
    font-family: 'Varela Round', serif;
    height: 80px;
    width: 100%;
    bottom: 0;
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    @media (max-width: 1023px) {
        display: block;
        position: relative;
    }
`;

const Wrapper = styled.div`
    height: 100%;
    position: relative;
    margin: 0 110px;
    box-sizing: border-box;

    @media (max-width: 1199px) and (min-width: 1024px) {
        margin: 0 auto;
        padding: 0 30px;
        width: 80%;
    }

    @media (max-width: 1023px) {
        margin: 0 auto;
        padding: 0 30px;
        width: 85%;
        height: 75px;
    }
`;

const Links = styled.div`
    position: absolute;
    display: inline-block;
    box-sizing: border-box;
    padding: 20px 0;
    width: fit-content;
    top: 0;
    right: 0;
    line-height: 40px;
    text-align: right;
    float: right;

    @media (max-width: 1023px) {
        padding: 17.5px 0;
    }
`;

const Link = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    width: 48px;
    color: rgba(0, 0, 0, 0.54);
    height: 48px;
    padding: 0;
    font-size: 1.5rem;
    text-align: center;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    text-decoration: none;
    border-radius: 50%;
    background-color: transparent;
    appearance: none;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    outline: none;

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }

    i {
        font-size: 20px;
        cursor: pointer;
        transition: opacity 0.2s;

        &:hover {
            opacity: 0.8;
        }
    }
`;

const Text = styled.div`
    position: absolute;
    display: inline-block;
    box-sizing: border-box;
    padding: 20px 0;
    width: fit-content;
    top: 0;
    right: 0;
    line-height: 40px;
    font-size: 16px;
    text-align: left;
    float: left;
    left: 0;
`;

export { IconListItem, Container, Wrapper, Links, Link, Text };
