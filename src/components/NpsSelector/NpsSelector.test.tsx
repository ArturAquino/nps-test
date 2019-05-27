import React from 'react';
import ReactDOM from 'react-dom';
import NpsSelector from './NpsSelector';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NpsSelector onClickFunc={() => console.log('Success!')} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
