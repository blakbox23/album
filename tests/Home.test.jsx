import { describe, test, vi } from 'vitest';
import {
  render, screen, waitFor,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from '../src/pages/Home';
import store from '../src/store/Store';
import { api } from '../src/store/Api';

describe('The Landing Page', () => {
  test('getUsers request is being called and UI updated appropriately', async () => {
    const mockFetchData = vi
      .spyOn(api, 'getUsers')
      .mockImplementation(async () => [
        {
          username: 'Breta',
        },
      ]);

    render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>,
    );

    expect(mockFetchData).toHaveBeenCalled();
    await waitFor(() => {
      expect(screen.getByText('Breta')).toBeInTheDocument();
    });
  });

  test('getAlbums request is being called and UI updated appropriately', async () => {
    const mockFetchAlbums = vi
      .spyOn(api, 'getAlbums')
      .mockImplementation(async () => [
        {
          title: 'album one',
        },
        {
          title: 'album two',
        },
      ]);
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>,
    );
    expect(mockFetchAlbums).toHaveBeenCalled();
    await waitFor(() => {
      expect(screen.getByText('2 albums')).toBeInTheDocument();
    });
  });
});
