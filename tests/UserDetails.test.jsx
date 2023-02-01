import { describe, test } from "vitest";
import { render, screen, waitFor, act } from "@testing-library/react";
import UserDetails from "../src/pages/UserDetails";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store/Store";
import { api } from "../src/store/Api";

describe("The UserDetails Page", () => {
    test("getUser request is being called and UI updated appropriately", async () => {
        const mockData = {
      id: "1",
      name: "Leanne",
    };
    const mockFetchData = vi
      .spyOn(api, "getUser")
      .mockImplementation(async () => {
        return mockData;
      });

    render(
      <BrowserRouter>
        <Provider store={store}>
          <UserDetails />
        </Provider>
      </BrowserRouter>
    );

    expect(mockFetchData).toHaveBeenCalled();
    await waitFor(() => {
      expect(screen.getByText("Leanne")).toBeInTheDocument();
      // expect(screen.getByTestId("name").value).toEqual("Leanne");
    });
  });

  test("getUserAlbums request is being called and UI updated appropriately", async () => {
    const mockFetchData = vi
      .spyOn(api, "getUserAlbums")
      .mockImplementation(async () => {
        return [
          {
            title: "UserAlbumTitle",
          },
        ];
      });
    render(
      <BrowserRouter>
        <Provider store={store}>
          <UserDetails />
        </Provider>
      </BrowserRouter>
    );

    expect(mockFetchData).toHaveBeenCalled();
    await waitFor(() => {
      expect(screen.getByText("UserAlbumTitle")).toBeInTheDocument();
    });
  });
});
