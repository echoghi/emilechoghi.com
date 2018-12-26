import Contact from '../app/components/Contact';
import 'jest-styled-components';
import 'whatwg-fetch';

configure({ adapter: new Adapter() });

const mockFormPost = () => {
    return fetch('http://localhost:3000/api/postForm', {
        method: 'POST',
        body: JSON.stringify({ name: 'test', email: 'test@jest.com', message: 'testing API' }),
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
    })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                console.log('POST test failed', response);
            }
        })
        .catch(error => {
            console.log('POST test failed', error);
        });
};

const component = mount(<Contact />);

describe('<Contact />', () => {
    test('snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    test('form renders correctly', () => {
        // Test that component exists
        expect(component).toBeDefined();
        expect(component).toHaveLength(1);
    });

    test('form should submit', () => {
        // enter name
        const nameInput = component
            .find('input')
            .first()
            .hostNodes()
            .instance();
        nameInput.value = 'Test';

        // enter email
        const emailInput = component
            .find('input')
            .at(1)
            .hostNodes()
            .instance();
        emailInput.value = 'test@jest.com';

        // enter message
        const messageInput = component
            .find('textarea')
            .first()
            .hostNodes()
            .instance();
        messageInput.value = 'testing form';

        // submit form
        component.find('form').simulate('submit');

        // validation should pass
        expect(component.find('input').first()).toHaveStyleRule('border', 'none');
        expect(component.find('input').at(1)).toHaveStyleRule('border', 'none');
        expect(component.find('textarea').first()).toHaveStyleRule('border', 'none');
    });

    test('form validation should work', () => {
        const component = mount(<Contact />);

        // enter name
        const nameInput = component.find('input').first();
        nameInput.simulate('change', {
            target: { value: 'test', name: 'name' }
        });

        // enter email
        const emailInput = component.find('input').at(1);
        emailInput.simulate('change', {
            target: { value: 'broken email', name: 'email' }
        });

        // enter message
        const messageInput = component.find('textarea').first();
        messageInput.simulate('change', {
            target: { value: 'test', name: 'message' }
        });

        // submit form
        component.find('form').simulate('submit');

        // state should be updated
        expect(component.state('name')).toEqual('test');
        expect(component.state('email')).toEqual('broken email');
        expect(component.state('message')).toEqual('test');
        expect(component.state('validation')).toEqual({
            email: { dirty: true, valid: false },
            message: { dirty: true, valid: true },
            name: { dirty: true, valid: true }
        });
    });

    test('form should POST successfully', async function() {
        const response = await mockFormPost();

        expect(response.message).toBe('Email Sent');
    });
});
