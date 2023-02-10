import { composeStories } from '@storybook/testing-react';
import { render, screen, fireEvent } from '@testing-library/react';

// import your story from App.stories.js
import * as stories from './App.stories';
const { Primary } = composeStories(stories);

// Add your tests here
it('Button text initially says click me', async () => {
    render(<Primary />);
    const button = screen.getByRole('button', { name : 'click me'});
    expect(button).toHaveTextContent(/click me/i);
});

it('Screen has text click me', async () => {
    render(<Primary />);
    expect(screen.getByText(/click me/i)).not.toBeNull()
});

it('Button can change to thanks', async () => {
    render(<Primary />);
    screen.getByRole('button').click();
    const clickedButton = screen.getByRole('button', { name : 'thanks'});
    expect(clickedButton).toBeInTheDocument();
});

it('Clicking button changes to thanks', async () => {
    render(<Primary />);
    const button = screen.getByRole('button', {name : 'click me'});
    fireEvent.click(button);
    const clickedButton = screen.getByRole('button', {name : 'thanks'});
    expect(clickedButton).toBeInTheDocument();
});

// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library