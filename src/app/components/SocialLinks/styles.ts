import styled from 'styled-components';

const LinkWrapper = styled.div`
    display: block;
    position: fixed;
    bottom: 20px;
    right: 20px;
    text-align: center;
    padding: 5px 16px;
    width: auto;
    font-size: 14px;
    line-height: 18px;
    font-weight: normal;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 9px 3px;
    color: rgb(72, 72, 72);
    margin: 0px;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    background: rgb(255, 255, 255);
    border-color: transparent;

    @media (max-width: 1023px) {
        display: none;
    }
`;

const IconListItem = styled.li`
    display: inline-block;
    list-style: none;

    a {
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
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
        outline: none;

        &:hover {
            background-color: rgba(0, 0, 0, 0.08);
        }
    }
`;

export { LinkWrapper, IconListItem };
