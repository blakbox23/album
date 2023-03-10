import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../src/pages/Login';

describe('The Log in Page', () => {
  test('Should render a log in form', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );

    const loginForm = screen.getByRole('form', { name: 'login' });
    expect(loginForm).toBeInTheDocument();
  });
});
