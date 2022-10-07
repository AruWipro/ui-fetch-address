import '@testing-library/jest-dom/extend-expect';
import { unmountComponentAtNode } from 'react-dom';
import { getAdressWithInRange, getAllAddresses } from './../../services/AddressService';
let container = null;

beforeEach(() => {
    getAdressWithInRange = jest.fn()
    getAllAddresses = jest.fn()
    container = document.createElement('div');
    document.body.appendChild(container);
    jest.mock('./../card/AddressCard', () => ({
        __esModule: true, 
        default: jest.fn(() => ({})),
     }));
})

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})


// describe('<AppHeader/>', () => {
//     it('should have Page title',()=>{
        
//         AddressCard = jest.fn()
//         render(<NoResults/>);
//         const headerTxt = screen.getByText(/Sorry/i)
//         expect(headerTxt).toBeInTheDocument();
//     })

// })