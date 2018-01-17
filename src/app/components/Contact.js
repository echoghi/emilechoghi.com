import React from 'react';
import { connect } from 'react-redux';
import { postForm, resetError, activatePage } from './actions';
// Components
import NavBar from './NavBar';
import Footer from './Footer';
import Loading from './Loading';
import FormError from './Error';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import ContactMap from './ContactMap';
import Anime from 'react-anime';
import ReactGA from 'react-ga';

const mapStateToProps = state => ({
    success: state.portfolioState.success,
    loading: state.portfolioState.loading,
    error: state.portfolioState.error,
    contact: state.navigationState.contact,
    width: state.portfolioState.width
});

const mapDispatchToProps = dispatch => ({
    postForm: data => dispatch(postForm(data)),
    resetError: () => dispatch(resetError()),
    activatePage: page => dispatch(activatePage(page))
});

// Email validation RegExp
const validateEmail = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// Reusable validation constuctor for each input
let validationObj = function() {
    this.valid = false;
    this.dirty = false;
};

class Contact extends React.Component {
    state = {
        loading: true,
        error: null,
        name: '',
        email: '',
        message: '',
        initialLoad: true,
        validation: {
            name: new validationObj(),
            email: new validationObj(),
            message: new validationObj()
        }
    };

    componentWillMount() {
        let { contact, activatePage } = this.props;
        window.scrollTo(0, 0);

        if (!contact) {
            activatePage('contact');
        }
    }

    componentDidMount() {
        ReactGA.ga('send', 'pageview', '/contact');
    }

    /**
     * Loading Spinner
     *
     * @return LoadingSpinner
     */
    renderLoading() {
        let { loading, error, success } = this.props;

        if (loading) {
            return <Loading />;
        } else if (error) {
            return <FormError close={this.props.resetError} />;
        }

        if (success) {
            if (this.state.name) {
                this.resetForm();
            }
        }
    }

    /**
     * Reset Form Data
     *
     * @state - entire state
     */
    resetForm() {
        // create a shallow copy of the state to mutate
        let obj = Object.assign({}, this.state);
        // Reset Form Data
        for (let key in obj) {
            if (key === 'validation') {
                obj[key].name = new validationObj();
                obj[key].email = new validationObj();
                obj[key].message = new validationObj();
            } else {
                obj[key] = '';
            }
        }

        // Reset inputs
        document.getElementById('contact-form').reset();

        this.setState(obj);
    }

    /**
     * Validate Inputs
     *
     * @return valid - validation status 
     */
    validateInputs() {
        let valid = true;
        // Check for incompleted fields
        for (let key in this.state.validation) {
            if (!this.state.validation[key]['valid']) {
                return false;
            }
        }

        return valid;
    }

    /**
     * Validate/Mask inputs as the user types
     *
     * @param event - DOM event info
     * @state - Send validation status to state
     */
    onChange = event => {
        // create a shallow copy of the state to mutate
        let obj = Object.assign({}, this.state);
        // Set value in obj to eventually send to the state
        obj[event.target.name] = event.target.value;
        // Validate inputs
        // Mark input as dirty (interacted with)
        obj['validation'][event.target.name]['dirty'] = true;

        if (event.target.name === 'email') {
            // Validate email address
            if (validateEmail.test(event.target.value)) {
                obj['validation'][event.target.name]['valid'] = true;
            } else {
                obj['validation'][event.target.name]['valid'] = false;
            }
        } else {
            // If there is any value for non-email inputs, mark it valid
            if (event.target.value !== '') {
                obj['validation'][event.target.name]['valid'] = true;
            } else {
                obj['validation'][event.target.name]['valid'] = false;
            }
        }

        this.setState(obj);
    };

    /**
     * Handle Error classNames for each input
     *
     * @param name - Input name
     * @return className - return class depending on validation status
     */
    handleErrorClass = name => {
        let className;
        let validation = this.state.validation;

        if (validation[name].valid) {
            className = '';
        } else if (!validation[name].valid && validation[name].dirty) {
            className = 'invalid';
        } else if (!validation[name].valid && !validation[name].dirty) {
            className = '';
        }

        return className;
    };

    /**
     * Handle Submit Event
     *
     * @param event - DOM event info
     * @state - Send validation status to state and make scan request
     */
    handleSubmit = event => {
        event.preventDefault();
        let { name, email, message } = this.state;

        if (this.validateInputs()) {
            this.props.postForm({ name, email, message });
        } else {
            // create a shallow copy of the state to mutate
            let obj = Object.assign({}, this.state);
            // If there is an invalid input, mark all as dirty on submit to alert the user
            for (let attr in this.state) {
                if (obj['validation'][attr]) {
                    obj['validation'][attr]['dirty'] = true;
                }
            }

            this.setState(obj);
        }
    };

    stopAnimation() {
        if (this.state.initialLoad) {
            this.setState({ initialLoad: false });
        }
    }

    renderSnackbarStyle() {
        if(this.props.width < 760) {
            return {
                width: '80%'
            };
        }
    }

    renderForm() {
        if (this.state.initialLoad) {
            let transition = {
                delay: (el, index) => index * 240,
                complete: () => this.stopAnimation(),
                elasticity: 0,
                duration: 1000,
                opacity: [0, 1],
                translateX: [200, 0]
            };

            return (
                <Anime {...transition}>
                    <div className="portfolio">
                        <div className="clearfix" />

                        <form id="contact-form">
                            <h4> Contact Me </h4>
                            <div className="form__row">
                                <div className="form__item">
                                    <label
                                        className={this.handleErrorClass(
                                            'name'
                                        )}
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        maxLength="100"
                                        onChange={this.onChange}
                                        className={this.handleErrorClass(
                                            'name'
                                        )}
                                    />
                                    <div
                                        className={this.handleErrorClass(
                                            'name'
                                        )}
                                    >
                                        required*
                                    </div>
                                </div>
                                <div className="form__item">
                                    <label
                                        className={this.handleErrorClass(
                                            'email'
                                        )}
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        maxLength="254"
                                        onChange={this.onChange}
                                        className={this.handleErrorClass(
                                            'email'
                                        )}
                                    />
                                    <div
                                        className={this.handleErrorClass(
                                            'email'
                                        )}
                                    >
                                        invalid*
                                    </div>
                                </div>
                            </div>
                            <div className="form__row">
                                <div className="form__item-lg">
                                    <label
                                        className={this.handleErrorClass(
                                            'message'
                                        )}
                                    >
                                        Your Message
                                    </label>
                                    <textarea
                                        maxLength="6000"
                                        name="message"
                                        onChange={this.onChange}
                                        className={this.handleErrorClass(
                                            'message'
                                        )}
                                    />
                                    <div
                                        className={this.handleErrorClass(
                                            'message'
                                        )}
                                    >
                                        required*
                                    </div>
                                </div>
                            </div>

                            <Button
                                onClick={this.handleSubmit}
                                className="form-button"
                            >
                                Send
                            </Button>
                        </form>

                        {this.renderLoading()}

                        <Snackbar
                            open={this.props.success || false}
                            message="Your message was sent successfully"
                            autoHideDuration={4000}
                            onRequestClose={this.handleRequestClose}
                        />
                    </div>
                </Anime>
            );
        } else {
            return (
                <div className="portfolio">
                    <div className="clearfix" />

                    <form id="contact-form">
                        <h4> Contact Me </h4>
                        <div className="form__row">
                            <div className="form__item">
                                <label
                                    className={this.handleErrorClass('name')}
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    maxLength="100"
                                    onChange={this.onChange}
                                    className={this.handleErrorClass('name')}
                                />
                                <div className={this.handleErrorClass('name')}>
                                    required*
                                </div>
                            </div>
                            <div className="form__item">
                                <label
                                    className={this.handleErrorClass('email')}
                                >
                                    Email Address
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    maxLength="254"
                                    onChange={this.onChange}
                                    className={this.handleErrorClass('email')}
                                />
                                <div className={this.handleErrorClass('email')}>
                                    invalid*
                                </div>
                            </div>
                        </div>
                        <div className="form__row">
                            <div className="form__item-lg">
                                <label
                                    className={this.handleErrorClass('message')}
                                >
                                    Your Message
                                </label>
                                <textarea
                                    maxLength="6000"
                                    name="message"
                                    onChange={this.onChange}
                                    className={this.handleErrorClass('message')}
                                />
                                <div
                                    className={this.handleErrorClass('message')}
                                >
                                    required*
                                </div>
                            </div>
                        </div>

                        <Button
                            onClick={this.handleSubmit}
                            className="form-button"
                        >
                            Send
                        </Button>
                    </form>

                    {this.renderLoading()}

                    <Snackbar
                        open={this.props.success || false}
                        style={this.renderSnackbarStyle()}
                        message="Your message was sent successfully"
                        autoHideDuration={4000}
                        onRequestClose={this.handleRequestClose}
                    />
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <NavBar pathname={this.props.location.pathname} />
                <ContactMap />

                {this.renderForm()}

                <Footer fixed />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
