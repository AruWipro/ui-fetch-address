import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import AppSearch from './Search';
const countries = require('./../../resources/inputCountriesData.json')
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

describe('<AppSearch/>', () => {
    it('should have a submit button', () => {
        render(<AppSearch />);
        const buttons = screen.getAllByRole('button')
        console.log(buttons.length);
        expect(buttons).toHaveLength(1)
    })

    it('should have a drop down to select country', () => {
        render(<AppSearch />);
        const dropdownelement = screen.getAllByTestId('country-dropdown')
        expect(dropdownelement).toHaveLength(1)
        expect(dropdownelement[0]).toHaveAttribute('name', 'coordinates')
    })

    it('dropdown should have all country options', async () => {
        render(<AppSearch />);
        const dropdown = screen.getByTestId('country-dropdown');
        const display = dropdown.children[3]
        console.log('####', display.textContent);
        expect(display.textContent).toContain(countries[0].country);
    })

    // it('should set the co-ordinates on country select', async () => {
    //     render(<AppSearch />);
    //     const dropdown = screen.getByTestId('country-dropdown');
    //     userEvent.selectOptions(dropdown,[])
    //     console.log(dropdown.getAttribute('selected'))
        
    // })

    it('should not allow invalid text into range field', () => {
        render(<AppSearch />);
        const text = screen.getByPlaceholderText('Enter offices range')
        userEvent.type(text, 'att')
        expect(text.value).toMatch('')

    })

    it('should accept valid km\'s asrange', () => {
        render(<AppSearch />);
        const range = screen.getByPlaceholderText('Enter offices range')
        console.log(range);
        expect(range.value).toBe("");
        fireEvent.change(range, { target: { value: '7' }})
        expect(range.value).toBe('7');

    })

    it('should have a single submit button', ()=>{
        render(<AppSearch />);
        const submitButton = screen.getAllByRole('button')
        expect(submitButton.length).toBe(1)
    })
    it('should be disabled by default', ()=>{
        render(<AppSearch />);
        const submitButton = screen.getByText(/Search/).closest('button')
        expect(submitButton).toBeDisabled()
    })

    



})