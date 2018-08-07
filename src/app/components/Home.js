import React from 'react';
import { connect } from 'react-redux';
// Components
import Footer from './Footer';
import ReactGA from 'react-ga';
import styled from 'styled-components';

const mapStateToProps = state => ({
    width: state.portfolioState.width
});

const Header = styled.h1`
    font-size: 100px;

    @media (max-width: 767px) {
        font-size: 50px;
    }
`;

const SubHead = styled.h2`
    font-size: 30px;

    @media (max-width: 767px) {
        font-size: 20px;
    }
`;

class Home extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);

        if (NODE_ENV === 'production') {
            ReactGA.ga('send', 'pageview', '/');
        }
    }

    renderFooter() {
        if (this.props.width > 800) {
            return <Footer fixed />;
        }
    }

    render() {
        return (
            <div>
                <div className="home">
                    <div className="jumbotron">
                        <div className="jumbotron__container">
                            <div className="jumbotron__content">
                                <Header>Emile Choghi</Header>
                                <SubHead>Frontend Engineer</SubHead>
                            </div>
                        </div>
                    </div>
                    <img
                        src="https://res.cloudinary.com/dp7726gkk/image/upload/c_scale,w_800/v1533608485/portfolio/home.png"
                        alt="San Francisco Skyline"
                    />
                </div>

                {this.renderFooter()}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Home);
