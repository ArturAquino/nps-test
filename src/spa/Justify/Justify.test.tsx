import React from 'react';
import ReactDOM from 'react-dom';
import Justify from './Justify';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Justify />, div);
    ReactDOM.unmountComponentAtNode(div);
});