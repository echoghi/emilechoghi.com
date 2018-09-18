import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Contact from '../app/components/Contact.js';

configure({ adapter: new Adapter() });

test('Contact Form', () => {
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
