import { createGlobalStyle } from 'styled-components';
import theme from './index';
const { colors, fontSizes, fonts } = theme;

const GlobalStyle = createGlobalStyle`
html,
body {
    position: relative;
    color: ${colors.black};
    font-size: ${fontSizes.normal};
    font-family: ${fonts.primary};
    width: 100%;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: inherit;
}

.clearfix:after {
    content: '';
    display: table;
    clear: both;
}
`;

export default GlobalStyle;
