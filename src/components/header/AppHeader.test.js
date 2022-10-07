import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import AppHeader from './AppHeader';

let container = null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
})

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

describe('<AppHeader/>', () => {
    it('should have Page title',()=>{
        render(<AppHeader/>);
        const headerTxt = screen.getByText(/Finder/i)
        expect(headerTxt).toBeInTheDocument();
    })

})