import React from 'react';
import ReactDOM from 'react-dom';
import Thanks from './Thanks';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thanks />, div);
    ReactDOM.unmountComponentAtNode(div);
});