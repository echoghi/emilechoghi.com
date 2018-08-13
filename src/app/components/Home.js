import React from 'react';
// Components
import ReactGA from 'react-ga';
import styled from 'styled-components';

const Card = styled.div`
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: 500px;
    height: 500px;

    .card {
        color: white;
        position: absolute;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 375px;
        height: 250px;
        padding: 20px;
        overflow: hidden;
        background: #393b65;
        border-radius: 10px;
        transform: translate(0px, 0px) rotateX(30deg) rotateZ(0deg);
        z-index: 2;
        transition: all 1s;

        @media (max-width: 768px) {
            width: 300px;
            height: 235px;
            padding: 20px 15px;
        }
    }

    .purple {
        color: #7795f8;
    }

    .yellow {
        color: #f8c741;
    }

    .red {
        color: #dd4143;
    }

    .inline {
        display: inline-block;
    }

    .tab {
        padding-left: 15px;
    }

    ul {
        list-style: none;
        padding-left: 15px;
        margin: 0;

        span {
            color: #74e4a2;

            &.white {
                color: white;
            }
        }
    }
`;

const RectOne = styled.svg`
    position: fixed;
    right: 0;
    height: 600px;
    width: 55%;
    top: -50px;
    transform: skewY(-12deg);

    rect {
        height: 100%;
        width: 100%;
        fill: #87bbfd;
    }
`;

const RectTwo = styled.svg`
    position: fixed;
    height: 800px;
    bottom: -350px;
    left: 0;
    width: 85%;
    transform: skewY(-20deg);

    rect {
        height: 100%;
        width: 100%;
        fill: #c3edfc;
    }

    @media (max-width: 1025px) {
        bottom: -500px;
    }

    @media (max-width: 765px) {
        bottom: -500px;
    }
`;

class Home extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);

        if (NODE_ENV === 'production') {
            ReactGA.ga('send', 'pageview', '/');
        }
    }

    render() {
        return (
            <div className="home">
                <Card>
                    <div className="card">
                        <div className="purple inline">class</div>{' '}
                        <span className="yellow inline">softwareEngineer</span> <span>{'{'}</span>
                        <div className="tab">
                            <div className="purple inline">constructor</div>(<div className="red inline" />
                            <span>{') {'}</span>
                        </div>
                        <div className="tab">
                            <ul className="red">
                                <li>
                                    this.name <span className="white">=</span> <span>'Emile Choghi'</span>
                                    <span className="white">;</span>
                                </li>
                                <li>
                                    this.type <span className="white">=</span> <span>'Frontend'</span>
                                    <span className="white">;</span>
                                </li>
                                <li>
                                    this.email <span className="white">=</span> <span>'emchoghi@gmail.com'</span>
                                    <span className="white">;</span>
                                </li>
                                <li>
                                    this.phone <span className="white">=</span> <span>'1 (650) 248-1572</span>
                                    <span className="white">;</span>
                                </li>
                            </ul>
                            }
                        </div>
                        <br />
                        <div className="tab">
                            <div className="purple inline">getInTouch</div>(<div className="red inline" />
                            <span>{') {'}</span>
                            <div className="tab">
                                <ul className="red">
                                    <li>
                                        window.location.href <span className="white">=</span> <span>'/contact'</span>
                                        <span className="white">;</span>
                                    </li>
                                </ul>
                            </div>
                            }
                        </div>
                        }
                    </div>
                </Card>
                <RectOne>
                    <rect x="0" y="0" />
                </RectOne>
                <RectTwo>
                    <rect x="0" y="0" />
                </RectTwo>
            </div>
        );
    }
}

export default Home;
