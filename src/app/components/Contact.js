import React from 'react';
import { connect } from 'react-redux';
import { postForm, resetError } from './actions';
// Components
import Footer from './Footer';
import Loading from './Loading';
import FormError from './Error';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import ContactMap from './ContactMap';
import ReactGA from 'react-ga';
import styled from 'styled-components';

const mapStateToProps = state => ({
    success: state.portfolioState.success,
    loading: state.portfolioState.loading,
    error: state.portfolioState.error,
    width: state.portfolioState.width
});

const mapDispatchToProps = dispatch => ({
    postForm: data => dispatch(postForm(data)),
    resetError: () => dispatch(resetError())
});

// Email validation RegExp
const validateEmail = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// Reusable validation constuctor for each input
let validationObj = function() {
    this.valid = false;
    this.dirty = false;
};

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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

        window.scrollTo(0, 0);
    }

    componentDidMount() {
        if (NODE_ENV === 'production') {
            ReactGA.ga('send', 'pageview', '/contact');
        }
    }

    /**
     * Loading Spinner
     *
     * @return LoadingSpinner
     */
    renderLoading() {
        const { loading, error, success, resetError } = this.props;

        if (loading) {
            return <Loading />;
        } else if (error) {
            return <FormError close={resetError} />;
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
        if (this.props.width < 760) {
            return {
                width: '80%'
            };
        }
    }

    render() {
        const FormHeader = styled.h4`
            font-size: 30px;
            font-weight: bold;
            margin: 100px 0;

            @media (max-width: 1199px) and (min-width: 1024px) {
                margin: 50px 0;
            }

            @media (max-width: 767px) {
                margin: 40px 0;
            }
        `;

        const Form = styled.form`
            font-family: 'Varela Round';
            background: none;
            margin: 0 auto;
            margin-top: 70px;
            width: 60%;

            @media (max-width: 1199px) and (min-width: 1024px) {
                height: 80vh;
                width: 70%;
            }

            @media (max-width: 1023px) {
                margin-top: 30px;
                width: 85%;
            }

            @media (max-width: 767px) {
                height: 185vh;
            }

            @media (max-width: 415px) and (min-width: 376px) {
                height: 100vh;
            }

            @media (max-width: 375px) {
                height: 105vh;
            }

            @media (max-width: 370px) {
                height: 120vh;
            }
        `;

        const FormRow = styled.div`
            display: block;
            width: 100%;
        `;

        return (
            <div>
                <ContactMap />

                <div className="portfolio">
                    <div className="clearfix" />

                    <Form id="contact-form">
                        <FormHeader> Contact Me </FormHeader>
                        <FormRow>
                            <div className="form__item">
                                <label className={this.handleErrorClass('name')}>Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    maxLength="100"
                                    onChange={this.onChange}
                                    className={this.handleErrorClass('name')}
                                />
                                <div className={this.handleErrorClass('name')}>required*</div>
                            </div>
                            <div className="form__item">
                                <label className={this.handleErrorClass('email')}>Email Address</label>
                                <input
                                    type="text"
                                    name="email"
                                    maxLength="254"
                                    onChange={this.onChange}
                                    className={this.handleErrorClass('email')}
                                />
                                <div className={this.handleErrorClass('email')}>invalid*</div>
                            </div>
                        </FormRow>
                        <FormRow>
                            <div className="form__item-lg">
                                <label className={this.handleErrorClass('message')}>Your Message</label>
                                <textarea
                                    maxLength="6000"
                                    name="message"
                                    onChange={this.onChange}
                                    className={this.handleErrorClass('message')}
                                />
                                <div className={this.handleErrorClass('message')}>required*</div>
                            </div>
                        </FormRow>

                        <Button onClick={this.handleSubmit} className="form-button">
                            Send
                        </Button>
                    </Form>

                    {this.renderLoading()}

                    <Snackbar
                        open={this.props.success || false}
                        style={this.renderSnackbarStyle()}
                        message="Your message was sent successfully"
                        autoHideDuration={4000}
                        onRequestClose={this.handleRequestClose}
                    />
                </div>

                <Footer fixed />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
