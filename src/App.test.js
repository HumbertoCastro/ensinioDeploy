import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import fireEvent from '@testing-library/user-event';
import App from './App';

describe('renders learn react link', () => {
  it("test how many components is render", () => {
    render(<App />);
    const contents = screen.getAllByTestId('request-content');
    expect(contents).toHaveLength(3);
  });

  it("test if the content text is right", () => {
    render(<App />);
    const contents = screen.getAllByTestId('request-title');
    expect(contents[0].innerHTML).toBe("Trilhas de etapas");
    expect(contents[1].innerHTML).toBe("Playlists");
    expect(contents[2].innerHTML).toBe("Coleções");
  })
});

describe('Test the content of the header', () => {
  it('Test the quantity of Link elements in the Header', () => {
    render(<App />);
    const headerLinks = screen.getAllByTestId('header-link');
    expect(headerLinks).toHaveLength(6);
  })
})

describe('Test the Lenguage selector', () => {
  it('test the quantity of lenguages possible to select', () => {
    render(<App />);
    const dropdownBtn = screen.getByTestId('drop-btn');
    fireEvent.click(dropdownBtn);
    const lenguageBtns = screen.getAllByTestId('lenguage-btn');
    expect(lenguageBtns).toHaveLength(3);
  })
  it('test if clicking on a diferent lenguage, it changes the text', () => {
    render(<App />);
    const lenguageBtns = screen.getByText('En');
    act(() => {
      lenguageBtns.dispatchEvent(new MouseEvent('click', {bubbles: true}))      
    })
    const mainText = screen.getByTestId('main-text');
    expect(mainText.innerHTML).toBe('Your powerful and profitable online school');
  })
  it('test if changing the lenguagem remains when the page is reloaded', () => {
    const reloadFn = () => {
      window.location.reload();
    };
    render(<App />);
    const lenguageBtns = screen.getByText('En');
    act(() => {
      lenguageBtns.dispatchEvent(new MouseEvent('click', {bubbles: true}))      
    })
    reloadFn();
    const mainText = screen.getByTestId('main-text');
    expect(mainText.innerHTML).toBe('Your powerful and profitable online school');
  })
})