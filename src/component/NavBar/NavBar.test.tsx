import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from './NavBar';

test('Navbar component is rendered', async () => {
    // Act
    const navDom = render(<NavBar />);
    // Assert
    expect(navDom.getByTestId("wrapper-box")).toBeTruthy();
    expect(navDom.getByTestId('app-bar')).toBeTruthy();
    expect(navDom.getByTestId('icon-btn')).toBeTruthy();
    expect(navDom.getByTestId('local-grocery-store-icon')).toBeTruthy();
    expect(navDom.getByText(/Grocery App/i)).toBeInTheDocument(); 
});