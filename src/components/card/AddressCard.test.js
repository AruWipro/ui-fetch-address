import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import * as imageUtils from './../../utils/ImageUtils';
import AddressCard from './AddressCard';
const countries = require('./../../resources/inputCountriesData.json')


const imageMock = jest.spyOn(imageUtils, "loadImages");
imageMock.mockImplementation(() => []);

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

describe(('<AddressCard/>'), () => {
    describe('Check Elemnts in the Card', () => {
        it('should contain a segment', () => {
            render(<AddressCard address={getMockAddress()} sourceCord = {getSourceCoordinates}/>)
            const cards = screen.getAllByTestId(adressCard-test)
            expect(cards.length).toBeGreaterThan(0)
        })

        it('should be contain an image at the organization label',()=>{
            render(<AddressCard address={getMockAddress()} sourceCord = {getSourceCoordinates}/>)
            const images = screen.getAllByRole('img')
            expect(images.length).toBeGreaterThan(1)
        })

        it('should display header as organization name', ()=>{
            render(<AddressCard address={getMockAddress()} sourceCord = {getSourceCoordinates}/>)
            const headers = screen.getAllByTestId('adressCard-header')
            expect(headers[0].includes('Blue Square 360')).toBeTruthy()
        })

    })
})

function getSourceCoordinates(){
    return {
        latitude:'1.284479',
        longitude:'103.75108200000002',
    }
}
function getMockAddress() {
    return {
        organization: "Blue Square 360",
        website: "http://www.bluesquare360.com/",
        services: "Blue Square 360 provides a professionally managed service covering all areas of a 360Â° Feedback initiative. We're experienced in supporting projects of all sizes, and always deliver a personal service that provides the level of support you need to ensure your 360 initiative delivers results for the business.",
        natureOfWork: "Currently working from office",
        address: {
            distance: 11.2,
            latitude: 1.28304,
            longitude: 103.85199319999992,
            location: "Ocean Financial Centre, Level 40, 10 Collyer Quay, Singapore, 049315",
            city: "Singapore"
        }
    }
}

