import React, { Component, Fragment } from 'react';
import {
    TextArea,
    Input,
    Label,
    ErrorLabel,
    Form,
    FormHeader,
    FormItem,
    FormRow,
    FormItemLarge,
    Portfolio,
    FormButton
} from './Contact.styles';
// Components
import ReactGA from 'react-ga';
import Footer from '../Footer';
import Success from '../Success';
import Loading from '../Loading';
import Error from '../Error';

// Email validation RegExp
const validateEmail = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Contact extends Component {
    state = {
        loading: false,
        error: false,
        success: false,
        name: '',
        email: '',
        message: '',
        validation: {
            name: { dirty: false, valid: false },
            email: { dirty: false, valid: false },
            message: { dirty: false, valid: false }
        }
    };

    componentDidMount() {
        document.title = 'Contact Emile Choghi';

        if (NODE_ENV === 'production') {
            ReactGA.ga('send', 'pageview', '/contact');
        }

        window.scrollTo(0, 0);
    }

    renderLoading() {
        if (this.state.loading) {
            return <Loading />;
        }
    }

    renderError() {
        if (this.state.error) {
            if (NODE_ENV === 'production') {
                ReactGA.event({
                    category: 'Form Error',
                    action: 'Form Submission Error',
                    label: 'Error Modal'
                });
            }

            return <Error close={() => this.setState({ error: false })} />;
        }
    }

    renderSuccess() {
        const { success } = this.state;

        if (success) {
            return <Success close={() => this.setState({ success: false })} />;
        }
    }

    /**
     * Reset Form Data
     *
     * @state - entire state
     */
    resetForm() {
        let { validation } = this.state;
        // Reset Form Validation
        for (let type in validation) {
            validation[type] = { dirty: false, valid: false };
        }

        this.setState({ name: '', email: '', message: '' });
    }

    /**
     * Validate Inputs
     *
     * @return valid - validation status
     */
    validateInputs() {
        // Check for incompleted fields
        for (let key in this.state.validation) {
            if (!this.state.validation[key]['valid']) {
                return false;
            }
        }

        return true;
    }

    /**
     * Validate inputs as the user types
     *
     * @param event - DOM event info
     * @state - Send validation status to state
     */
    onChange = event => {
        const { name, value } = event.target;
        // create a shallow copy of the state to mutate
        let obj = Object.assign({}, this.state);

        // Set value in obj to eventually send to the state
        obj[name] = value;

        // Validate inputs
        if (name === 'email') {
            // Validate email address
            if (validateEmail.test(value)) {
                obj['validation'][name]['valid'] = true;
            } else {
                obj['validation'][name]['valid'] = false;
            }
        } else {
            // If there is any value for non-email inputs, mark it valid
            if (value !== '') {
                obj['validation'][name]['valid'] = true;
            } else {
                obj['validation'][name]['valid'] = false;
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
        const { validation } = this.state;

        if (validation[name].valid) {
            return '';
        } else if (!validation[name].valid && validation[name].dirty) {
            return 'invalid';
        } else if (!validation[name].valid && !validation[name].dirty) {
            return '';
        }
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
                        callback({ success: true, loading: false });

                        if (NODE_ENV === 'production') {
                            ReactGA.event({
                                category: 'Form Success',
                                action: 'Message Submitted',
                                label: 'Success Notification'
                            });
                        }

                        this.resetForm();
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
            <Fragment>
                <Portfolio>
                    <div className="clearfix" />

                    <Form id="contact-form" onSubmit={this.handleSubmit}>
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
                                <ErrorLabel className={this.handleErrorClass('name')}>
                                    required*
                                </ErrorLabel>
                            </FormItem>
                            <FormItem>
                                <Label className={this.handleErrorClass('email')}>
                                    Email Address
                                </Label>
                                <Input
                                    type="text"
                                    name="email"
                                    value={email}
                                    maxLength="254"
                                    onChange={this.onChange}
                                    className={this.handleErrorClass('email')}
                                />
                                <ErrorLabel className={this.handleErrorClass('email')}>
                                    invalid*
                                </ErrorLabel>
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
                                <ErrorLabel className={this.handleErrorClass('message')}>
                                    required*
                                </ErrorLabel>
                            </FormItemLarge>
                        </FormRow>

                        <FormButton type="submit">Send</FormButton>
                    </Form>

                    {this.renderLoading()}
                    {this.renderSuccess()}
                    {this.renderError()}
                </Portfolio>

                <Footer fixed />
            </Fragment>
        );
    }
}

export default Contact;
