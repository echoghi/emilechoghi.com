import { cleanup, fireEvent } from 'react-testing-library';

describe('<Contact />', () => {
    afterEach(cleanup);

    test('snapshot', () => {
        const { container } = renderApp({
            route: '/contact'
        });

        expect(container.firstChild).toMatchSnapshot();
    });

    test('form should submit', () => {
        const { getByTestId } = renderApp({
            route: '/contact'
        });

        // enter name
        fireEvent.change(getByTestId('name'), {
            target: { value: 'Jest Test' }
        });

        // enter email
        fireEvent.change(getByTestId('email'), {
            target: { value: 'test@jest.com' }
        });

        // enter message
        fireEvent.change(getByTestId('message'), {
            target: { value: '🚩 This is a test! 🚩' }
        });

        // submit form
        fireEvent.click(getByTestId('send'));

        // validation should pass
        expect(getByTestId('name-label').classList).not.toContain('invalid');
        expect(getByTestId('email-label').classList).not.toContain('invalid');
        expect(getByTestId('message-label').classList).not.toContain('invalid');

        // payload should be sent
        expect(fetch.mock.calls[0][1].body).toBe(
            JSON.stringify({
                name: 'Jest Test',
                email: 'test@jest.com',
                message: '🚩 This is a test! 🚩'
            })
        );
    });

    test('form validation should work', () => {
        const { getByTestId } = renderApp({
            route: '/contact'
        });

        // enter name
        fireEvent.change(getByTestId('name'), {
            target: { value: 'Jest Test' }
        });

        // enter incorrect email
        fireEvent.change(getByTestId('email'), {
            target: { value: 'broken.email.com' }
        });

        // enter message
        fireEvent.change(getByTestId('message'), {
            target: { value: '🚩 This is a test! 🚩' }
        });

        // submit form
        fireEvent.click(getByTestId('send'));

        // validation should pass
        expect(getByTestId('name-label').classList).not.toContain('invalid');
        expect(getByTestId('email-label').classList).toContain('invalid');
        expect(getByTestId('message-label').classList).not.toContain('invalid');
    });
});
