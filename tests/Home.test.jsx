import { describe, test } from "vitest";
import { render, screen, waitFor, act } from "@testing-library/react";
import Home from "../src/pages/Home";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store/Store";
import { api } from "../src/store/Api";


describe("The Landing Page", () => {
  test("Should render a log out button", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>
    );

    const homeText = screen.getByText(/home/i);

    expect(homeText).toBeInTheDocument();
  });

  test("getUsers request is being called and UI updated appropriately", async () => {
    const mockFetchData = vi
      .spyOn(api, "getUsers")
      .mockImplementation(async () => {
        return [
          {
            username: "Breta",
          },
        ];
      });

    render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>
    );

    expect(mockFetchData).toHaveBeenCalled();
    await waitFor(() => {
      expect(screen.getByText("Breta")).toBeInTheDocument();
    });
  });

  test("getAlbums request is being called and UI updated appropriately", async () => {
    const mockFetchAlbums = vi
      .spyOn(api, "getAlbums")
      .mockImplementation(async () => {
        return [
          {
            title: "album one",
          },
          {
            title: "album two",
          },
        ];
      });
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>
    );
    expect(mockFetchAlbums).toHaveBeenCalled();
    await waitFor(() => {
        expect(screen.getByText("2 albums")).toBeInTheDocument();
      });
  });


});
