import Contact from '../app/components/Contact.js';
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

describe('<Contact />', () => {
    test('Contact Snapshot', () => {
        const component = shallow(<Contact />);
        expect(component).toMatchSnapshot();
    });

    test('Contact form renders correctly', () => {
        const component = shallow(<Contact />);
        // Test that component exists
        expect(component).toBeDefined();
        expect(component).toHaveLength(1);
    });

    test('Contact Form Should Submit', () => {
        const component = mount(<Contact />);

        const nameInput = component
            .find('input')
            .first()
            .hostNodes()
            .instance();
        nameInput.value = 'Test';

        const emailInput = component
            .find('input')
            .at(1)
            .hostNodes()
            .instance();
        emailInput.value = 'test@jest.com';

        const messageInput = component
            .find('textarea')
            .first()
            .hostNodes()
            .instance();
        messageInput.value = 'testing form';

        component.find('form').simulate('submit');
    });

    test('form should POST successfully', async function() {
        const response = await mockFormPost();

        expect(response.message).toBe('Email Sent');
    });
});
