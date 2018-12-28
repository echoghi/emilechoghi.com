import styled from 'styled-components';

const NotFound = styled.div`
    position: relative;
    padding: 15rem 1.5rem;
    margin: 0 auto;
    text-align: left;
    max-width: 36.4rem;
    height: 100px;

    p {
        font-size: 16px;
    }

    a {
        font-weight: bold;
    }

    @media (max-width: 767px) {
        padding: 10rem 1.5rem;
    }
`;

export { NotFound };
