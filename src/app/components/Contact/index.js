import React, { useState, Fragment } from 'react';
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
} from './styles';
// Components
import ReactGA from 'react-ga';
import Footer from '../Footer';
import Success from './Success';
import Loading from '../Loading';
import Error from './Error';

// Email validation RegExp
const validateEmail = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Contact = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    // const [mounted, onMount] = useState(false);
    const [form, setFormValue] = useState({ name: '', email: '', message: '' });
    const [validation, setValidation] = useState({
        name: { dirty: false, valid: false },
        email: { dirty: false, valid: false },
        message: { dirty: false, valid: false }
    });

    // useEffect(
    //     () => {
    //         if (!mounted) {
    //             document.title = 'Contact Emile Choghi';

    //             if (NODE_ENV === 'production') {
    //                 ReactGA.ga('send', 'pageview', '/contact');
    //             }

    //             window.scrollTo(0, 0);
    //             onMount(true);
    //         }
    //     },
    //     [mounted]
    // );

    function renderLoading() {
        if (loading) {
            return <Loading />;
        }
    }

    function renderError() {
        if (error) {
            if (NODE_ENV === 'production') {
                ReactGA.event({
                    category: 'Form Error',
                    action: 'Form Submission Error',
                    label: 'Error Modal'
                });
            }

            return <Error close={() => setError(false)} />;
        }
    }

    function renderSuccess() {
        if (success) {
            return <Success close={() => setSuccess(false)} />;
        }
    }

    function resetForm() {
        // Reset Form Validation
        for (let type in validation) {
            validation[type] = { dirty: false, valid: false };
        }

        setFormValue({ name: '', email: '', message: '' });
        setValidation(validation);
    }

    function validateInputs() {
        // Check for incompleted fields
        for (let key in validation) {
            if (!validation[key]['valid']) {
                return false;
            }
        }

        return true;
    }

    const onChange = event => {
        const { name, value } = event.target;

        // Set value in obj to eventually send to the state
        form[name] = value;

        // Validate inputs
        if (name === 'email') {
            // Validate email address
            if (validateEmail.test(value)) {
                validation[name]['valid'] = true;
            } else {
                validation[name]['valid'] = false;
            }
        } else {
            // If there is any value for non-email inputs, mark it valid
            if (value !== '') {
                validation[name]['valid'] = true;
            } else {
                validation[name]['valid'] = false;
            }
        }

        setFormValue(form);
    };

    const handleErrorClass = name => {
        if (validation[name].valid) {
            return '';
        } else if (!validation[name].valid && validation[name].dirty) {
            return 'invalid';
        } else if (!validation[name].valid && !validation[name].dirty) {
            return '';
        }
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (validateInputs()) {
            setLoading(true);

            return fetch('/functions/form', {
                method: 'POST',
                body: JSON.stringify(form),
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            })
                .then(response => {
                    if (response.status === 200) {
                        setSuccess(true);
                        setLoading(false);

                        if (NODE_ENV === 'production') {
                            ReactGA.event({
                                category: 'Form Success',
                                action: 'Message Submitted',
                                label: 'Success Notification'
                            });
                        }

                        resetForm();
                    } else {
                        setError(true);
                        setLoading(false);
                    }
                })
                .catch(error => {
                    setError(true);
                    setLoading(false);
                    throw error;
                });
        } else {
            // create a shallow copy of the state to mutate
            let obj = Object.assign({}, validation);
            // If there is an invalid input, mark all as dirty on submit to alert the user
            for (let attr in form) {
                if (obj[attr]) {
                    obj[attr]['dirty'] = true;
                }
            }

            setValidation(obj);
        }
    };

    const { name, email, message } = form;

    return (
        <Fragment>
            <Portfolio>
                <div className="clearfix" />

                <Form id="contact-form" onSubmit={handleSubmit}>
                    <FormHeader> Contact Me </FormHeader>
                    <FormRow>
                        <FormItem>
                            <Label className={handleErrorClass('name')}>
                                Name
                                <Input
                                    type="text"
                                    name="name"
                                    value={name}
                                    maxLength="100"
                                    onChange={onChange}
                                    className={handleErrorClass('name')}
                                    data-testid="name"
                                />
                            </Label>
                            <ErrorLabel
                                className={handleErrorClass('name')}
                                data-testid="name-label"
                            >
                                required*
                            </ErrorLabel>
                        </FormItem>
                        <FormItem>
                            <Label className={handleErrorClass('email')}>
                                Email Address
                                <Input
                                    type="text"
                                    name="email"
                                    value={email}
                                    maxLength="254"
                                    onChange={onChange}
                                    className={handleErrorClass('email')}
                                    data-testid="email"
                                />
                            </Label>
                            <ErrorLabel
                                className={handleErrorClass('email')}
                                data-testid="email-label"
                            >
                                invalid*
                            </ErrorLabel>
                        </FormItem>
                    </FormRow>
                    <FormRow>
                        <FormItemLarge>
                            <Label className={handleErrorClass('message')}>
                                Message
                                <TextArea
                                    maxLength="6000"
                                    name="message"
                                    value={message}
                                    onChange={onChange}
                                    className={handleErrorClass('message')}
                                    data-testid="message"
                                />
                            </Label>
                            <ErrorLabel
                                className={handleErrorClass('message')}
                                data-testid="message-label"
                            >
                                required*
                            </ErrorLabel>
                        </FormItemLarge>
                    </FormRow>

                    <FormButton type="submit" data-testid="send">
                        Send
                    </FormButton>
                </Form>

                {renderLoading()}
                {renderSuccess()}
                {renderError()}
            </Portfolio>

            <Footer fixed />
        </Fragment>
    );
};

export default Contact;
