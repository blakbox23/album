import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../src/pages/Login';
import Signup from '../src/pages/Signup';

describe('The Google Sign in button', () => {
  test('Should render googlge button on  Log in page', async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );

    const googleButton = screen.getByRole('button', { name: 'google-btn' });
    expect(googleButton).toBeInTheDocument();
  });

  test('Should render googlge button on Sign up page', async () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>,
    );

    const googleButton = screen.getByRole('button', { name: 'google-btn' });
    expect(googleButton).toBeInTheDocument();
  });
});
