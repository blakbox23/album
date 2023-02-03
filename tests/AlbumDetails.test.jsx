import { vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { api } from '../src/store/Api';
import store from '../src/store/Store';
import AlbumDetails from '../src/pages/AlbumDetails';

describe('The AlbumDetails Page', () => {
  test('getAlbum request is being called and UI updated appropriately', async () => {
    const albumMockData = {
      album: { title: 'album name' },
      photos: [
        { title: 'veritatis numquam eius' },
        { title: 'veritatis numquam' },
      ],
    };

    const mockFetchData = vi
      .spyOn(api, 'getAlbum')
      .mockImplementation(async () => albumMockData);
    render(
      <BrowserRouter>
        <Provider store={store}>
          <AlbumDetails />
        </Provider>
      </BrowserRouter>,
    );

    expect(mockFetchData).toHaveBeenCalled();
    await waitFor(() => {
      expect(screen.getByText('album name')).toBeInTheDocument();
      expect(screen.getByText('(2) photos')).toBeInTheDocument();
    });
  });
});
