import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Contact from '../app/components/Contact.js';
import 'whatwg-fetch';

configure({ adapter: new Adapter() });

test('Contact Form Should Submit', () => {
    const component = mount(<Contact />);
    const shallowComponent = shallow(<Contact />);
    expect(shallowComponent).toMatchSnapshot();

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

describe('Contact API', function() {
    it('POST', async function() {
        const response = await mockFormPost();

        expect(response.message).toBe('Email Sent');
    });
});
