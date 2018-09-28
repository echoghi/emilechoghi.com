import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
global.React = React;
global.Adapter = Adapter;
global.mount = mount;
global.shallow = shallow;
global.configure = configure;
// Quick NODE_ENV hack for Jest
window.NODE_ENV = 'development';
window.scrollTo = () => {};
