import React from 'react';
// Components
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Loading from './Loading';
import Error from './Error';
import Snackbar from '@material-ui/core/Snackbar';
import ContactMap from './ContactMap';
import ReactGA from 'react-ga';
import styled from 'styled-components';

const Portfolio = styled.div`
    height: 80vh;
    padding: 0 70px;
    font-family: 'Varela Round';
    margin-top: 80px;

    @media (max-width: 1199px) and (min-width: 1024px) {
        height: auto;
        padding: 0 30px 30px 30px;
    }

    @media (max-width: 1023px) {
        height: auto;
        padding: 0;
        padding-bottom: 30px;
    }
`;

const FormHeader = styled.h4`
    font-size: 30px;
    font-weight: normal;
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

const FormItem = styled.div`
    display: inline-block;
    margin: 10px 0;
    width: 46%;
    float: right;

    @media (max-width: 767px) {
        display: block;
        width: 100%;
    }

    &:first-child {
        float: left;
    }
`;

const FormItemLarge = styled.div`
    display: inline-block;
    margin: 10px 0;
    width: 100%;
    float: right;

    @media (max-width: 767px) {
        display: block;
        width: 100%;
    }

    &:first-child {
        float: left;
    }
`;

const ErrorLabel = styled.div`
    visibility: hidden;
    text-align: right;
    color: #dd4b39;
    letter-spacing: 0.3px;
    font-size: 12px;
    font-weight: bold;
    line-height: 2;
    text-transform: uppercase;

    &.invalid {
        visibility: visible;
    }
`;

const Label = styled.label`
    font-size: 18px;

    &.invalid {
        color: #dd4b39;
    }
`;

const Input = styled.input`
    font-family: 'Rubik', sans-serif;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    display: block;
    box-sizing: border-box;
    background-color: #ecf1f6;
    color: #3d575d;
    border: none;
    width: 100%;
    margin: 5px 0;
    height: 55px;
    padding: 5px 0 5px 15px;
    font: inherit;
    font-size: 18px;
    border-radius: 0;
    transition: opacity 0.2s;

    &.invalid {
        border: 1px solid #dd4b39;
        border-radius: 0;
    }

    &:focus {
        outline: none;
    }
`;

const TextArea = styled.textarea`
    font-family: 'Rubik', sans-serif;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    display: block;
    box-sizing: border-box;
    background-color: #ecf1f6;
    color: #3d575d;
    border: none;
    width: 100%;
    margin: 5px 0;
    height: 150px;
    padding: 15px 0 5px 15px;
    font: inherit;
    font-size: 18px;
    border-radius: 0;
    transition: opacity 0.2s;

    &.invalid {
        border: 1px solid #dd4b39;
        border-radius: 0;
    }

    &:focus {
        outline: none;
    }
`;

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
            loading: false,
            error: false,
            success: false,
            name: '',
            email: '',
            message: '',
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

    renderLoading() {
        const { loading, error, success, name } = this.state;

        if (loading) {
            return <Loading />;
        } else if (error) {
            return <Error close={() => this.setState({ error: false })} />;
        }

        if (success && name) {
            this.resetForm();
        }
    }

    renderSnackbar() {
        if (this.state.success) {
            return <Snackbar open message="Your message was sent, thanks for reaching out!" autoHideDuration={4000} />;
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
     * Validate inputs as the user types
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

    handleSubmit = event => {
        event.preventDefault();

        if (this.validateInputs()) {
            this.setState({ loading: true });

            const callback = state => {
                this.setState(state);
            };

            const { name, email, message } = this.state;

            return fetch('/api/postForm', {
                method: 'POST',
                body: JSON.stringify({ name, email, message }),
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            })
                .then(response => {
                    if (response.status === 200) {
                        this.setState({ success: true, loading: false });

                        if (NODE_ENV === 'production') {
                            ReactGA.event({
                                category: 'Form Success',
                                action: 'Message Submitted',
                                label: 'Success Notification'
                            });
                        }

                        // Reset form to clear success notification
                        setTimeout(() => {
                            callback({ error: false, success: false });
                        }, 3000);
                    } else {
                        callback({ error: true, loading: false });
                    }
                })
                .catch(error => {
                    callback({ error: true, loading: false });
                    throw error;
                });
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

    render() {
        const { name, email, message } = this.state;

        return (
            <div>
                <Helmet>
                    <link rel="canonical" href="https://emilechoghi.com/contact" />
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css"
                        integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ=="
                        crossOrigin=""
                    />
                </Helmet>
                <ContactMap />

                <Portfolio>
                    <div className="clearfix" />

                    <Form id="contact-form">
                        <FormHeader> Contact Me </FormHeader>
                        <FormRow>
                            <FormItem>
                                <Label className={this.handleErrorClass('name')}>Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    value={name}
                                    maxLength="100"
                                    onChange={this.onChange}
                                    className={this.handleErrorClass('name')}
                                />
                                <ErrorLabel className={this.handleErrorClass('name')}>required*</ErrorLabel>
                            </FormItem>
                            <FormItem>
                                <Label className={this.handleErrorClass('email')}>Email Address</Label>
                                <Input
                                    type="text"
                                    name="email"
                                    value={email}
                                    maxLength="254"
                                    onChange={this.onChange}
                                    className={this.handleErrorClass('email')}
                                />
                                <ErrorLabel className={this.handleErrorClass('email')}>invalid*</ErrorLabel>
                            </FormItem>
                        </FormRow>
                        <FormRow>
                            <FormItemLarge>
                                <Label className={this.handleErrorClass('message')}>Message</Label>
                                <TextArea
                                    maxLength="6000"
                                    name="message"
                                    value={message}
                                    onChange={this.onChange}
                                    className={this.handleErrorClass('message')}
                                />
                                <ErrorLabel className={this.handleErrorClass('message')}>required*</ErrorLabel>
                            </FormItemLarge>
                        </FormRow>

                        <button onClick={this.handleSubmit} className="form-button">
                            Send
                        </button>
                    </Form>

                    {this.renderLoading()}
                    {this.renderSnackbar()}
                </Portfolio>

                <Footer fixed />
            </div>
        );
    }
}

export default Contact;
