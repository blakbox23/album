import { describe, test, vi } from 'vitest';
import {
  render, screen, waitFor,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import UserDetails from '../src/pages/UserDetails';
import store from '../src/store/Store';
import { api } from '../src/store/Api';

describe('The UserDetails Page', () => {
  test('getUser request is being called and UI updated appropriately', async () => {
    const mockData = {
      id: '1',
      name: 'Leanne',
      website: 'www.leanne.com',
    };
    const mockFetchData = vi
      .spyOn(api, 'getUser')
      .mockImplementation(async () => mockData);

    render(
      <BrowserRouter>
        <Provider store={store}>
          <UserDetails />
        </Provider>
      </BrowserRouter>,
    );

    expect(mockFetchData).toHaveBeenCalled();
    await waitFor(() => {
      expect(screen.getByText('Leanne')).toBeInTheDocument();
      expect(screen.getByText('www.leanne.com')).toBeInTheDocument();
    });
  });

  test('getUserAlbums request is being called and UI updated appropriately', async () => {
    const mockFetchData = vi
      .spyOn(api, 'getUserAlbums')
      .mockImplementation(async () => [
        {
          title: 'UserAlbumTitle',
        },
      ]);
    render(
      <BrowserRouter>
        <Provider store={store}>
          <UserDetails />
        </Provider>
      </BrowserRouter>,
    );

    expect(mockFetchData).toHaveBeenCalled();
    await waitFor(() => {
      expect(screen.getByText('UserAlbumTitle')).toBeInTheDocument();
    });
  });
});
