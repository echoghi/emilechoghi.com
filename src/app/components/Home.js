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
        box-shadow: -2px 2px 0px 0px #202020, -10px 10px 40px 0px rgba(0, 0, 0, 0.3);
        transform: translate(0px, 0px) rotateX(30deg) rotateZ(0deg);
        z-index: 2;
        transition: all 1s;
    }

    .purple {
        color: #c55b73;
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
            color: #70b030;

            &.white {
                color: white;
            }
        }
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
            <div>
                <div className="home">
                    <div className="jumbotron">
                        <div className="jumbotron__container">
                            <div className="jumbotron__content">
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
                                                    this.name <span className="white">=</span>{' '}
                                                    <span>'Emile Choghi'</span>
                                                    <span className="white">;</span>
                                                </li>
                                                <li>
                                                    this.type <span className="white">=</span> <span>'Frontend'</span>
                                                    <span className="white">;</span>
                                                </li>
                                                <li>
                                                    this.email <span className="white">=</span>{' '}
                                                    <span>'emchoghi@gmail.com'</span>
                                                    <span className="white">;</span>
                                                </li>
                                                <li>
                                                    this.phone <span className="white">=</span>{' '}
                                                    <span>'1 (650) 248-1572</span>
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
                                                        window.location.href <span className="white">=</span>{' '}
                                                        <span>'/contact'</span>
                                                        <span className="white">;</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            }
                                        </div>
                                        }
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <svg
                        width="2000"
                        height="1000"
                        style={{ transform: 'translateY(-900px) translateX(700px) skewY(-12deg)' }}
                    >
                        <rect fill="#87bbfd" x="0" y="0" width="2000" height="1000" />
                    </svg>
                    <svg
                        width="1500"
                        height="1000"
                        style={{ transform: 'translateY(-1000px) translateX(-200px) skewY(-12deg)' }}
                    >
                        <rect fill="#c3edfc" x="0" y="0" width="1500" height="1000" />
                    </svg>
                </div>
            </div>
        );
    }
}

export default Home;
