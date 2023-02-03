import { describe, test, vi } from 'vitest';
import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/store/Store';
import { api } from '../src/store/Api';
import PhotoDetails from '../src/pages/PhotoDetails';

describe('The PhotoDetails Page', () => {
  test('getPhoto request is being called and UI updated appropriately', async () => {
    const mockData = {
      id: '1',
      title: 'photoTitle',
    };
    const mockFetchData = vi
      .spyOn(api, 'getPhoto')
      .mockImplementation(async () => mockData);
    render(
      <BrowserRouter>
        <Provider store={store}>
          <PhotoDetails />
        </Provider>
      </BrowserRouter>,
    );

    expect(mockFetchData).toHaveBeenCalled();
    await waitFor(() => {
      expect(screen.getByText('photoTitle')).toBeInTheDocument();
    });
  });

  //   EDIT PHOTO FORM IS RENDERED AFTER CLICKING ON EDIT ICON
  test('Edit photo form is rendered after user clicks on edit icon', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <PhotoDetails />
        </Provider>
      </BrowserRouter>,
    );

    await fireEvent.click(screen.getByTestId('editIcon'));
    const editForm = screen.getByRole('form', { name: 'edit' });
    expect(editForm).toBeInTheDocument();
  });

  //   EDIT PHOTO REQUEST IS RUN AFTER FORM SUBMISSION
  test('editPhoto request is being called and UI updated appropriately', async () => {
    const mockFetchData = vi
      .spyOn(api, 'editPhoto')
      .mockImplementation(async () => ({
        id: '1',
        title: 'new title',
      }));
    render(
      <BrowserRouter>
        <Provider store={store}>
          <PhotoDetails />
        </Provider>
      </BrowserRouter>,
    );

    await fireEvent.click(screen.getByTestId('editIcon'));
    const editForm = screen.getByRole('form', { name: 'edit' });
    await fireEvent.submit(editForm);
    expect(mockFetchData).toHaveBeenCalled();
    await waitFor(() => {
      expect(screen.getByText('new title')).toBeInTheDocument();
    });
  });
});
