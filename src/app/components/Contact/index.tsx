import React from 'react';
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

interface ValidationState {
    email: { dirty: boolean; valid: boolean };
    message: { dirty: boolean; valid: boolean };
    name: { dirty: boolean; valid: boolean };
    [key: string]: { dirty: boolean; valid: boolean };
}

interface FormState {
    email: string;
    message: string;
    name: string;
    [key: string]: string;
}

// form validation
const formValidation: ValidationState = {
    email: { dirty: false, valid: false },
    message: { dirty: false, valid: false },
    name: { dirty: false, valid: false }
};

// form validation
const formState: FormState = {
    email: '',
    message: '',
    name: ''
};

// Email validation RegExp
const validateEmail: RegExp = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Contact = React.memo(() => {
    const [success, setSuccess] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [mounted, onMount] = React.useState(false);
    const [form, setFormValue] = React.useState(formState);
    const [validation, setValidation] = React.useState(formValidation);

    React.useEffect(
        () => {
            if (!mounted) {
                document.title = 'Contact Emile Choghi';

                if (NODE_ENV === 'production') {
                    // @ts-ignore
                    ReactGA.ga('send', 'pageview', '/contact');
                }

                window.scrollTo(0, 0);
                onMount(true);
            }
        },
        [mounted]
    );

    function renderLoading() {
        if (loading) {
            return <Loading />;
        }
    }

    function renderError() {
        if (error) {
            if (NODE_ENV === 'production') {
                ReactGA.event({
                    action: 'Form Submission Error',
                    category: 'Form Error',
                    label: 'Error Modal'
                });
            }

            const clearError = () => setError(false);

            return <Error close={clearError} />;
        }
    }

    function renderSuccess() {
        if (success) {
            const resetSuccess = () => setSuccess(false);

            return <Success close={resetSuccess} />;
        }
    }

    function resetForm(): void {
        setFormValue(formState);
        setValidation(formValidation);
    }

    function validateInputs(): boolean {
        // Check for incompleted fields
        for (const key in validation) {
            if (!validation[key].valid) {
                return false;
            }
        }

        return true;
    }

    const onChange = (event: any) => {
        const { value } = event.target;
        const formField = event.target.name;

        // Set value in obj to eventually send to the state
        form[formField] = value;

        // Validate inputs
        if (formField === 'email') {
            // Validate email address
            validation[formField].valid = validateEmail.test(value);
        } else {
            // If there is any value for non-email inputs, mark it valid
            if (value !== '') {
                validation[formField].valid = true;
            } else {
                validation[formField].valid = false;
            }
        }

        setFormValue(form);
    };

    const handleErrorClass = (inputName: string): string => {
        if (validation[inputName].valid) {
            return '';
        } else if (!validation[inputName].valid && validation[inputName].dirty) {
            return 'invalid';
        } else if (!validation[inputName].valid && !validation[inputName].dirty) {
            return '';
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (validateInputs()) {
            setLoading(true);

            return fetch('/api/postForm', {
                body: JSON.stringify(form),
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                method: 'POST'
            })
                .then(response => {
                    if (response.status === 200) {
                        setSuccess(true);
                        setLoading(false);

                        if (NODE_ENV === 'production') {
                            ReactGA.event({
                                action: 'Message Submitted',
                                category: 'Form Success',
                                label: 'Success Notification'
                            });
                        }

                        resetForm();
                    } else {
                        setError(true);
                        setLoading(false);
                    }
                })
                .catch(err => {
                    setError(true);
                    setLoading(false);
                    throw err;
                });
        } else {
            // create a shallow copy of the state to mutate
            const obj = { ...validation };
            // If there is an invalid input, mark all as dirty on submit to alert the user
            for (const attr in form) {
                if (obj[attr]) {
                    obj[attr].dirty = true;
                }
            }

            setValidation(obj);
        }
    };

    const { name, email, message } = form;

    return (
        <React.Fragment>
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
                                    maxLength={100}
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
                                    maxLength={254}
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
                                    maxLength={500}
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

            <Footer fixed={true} />
        </React.Fragment>
    );
});

export default Contact;
