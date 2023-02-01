import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../src/pages/Home";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store/Store";

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


});
