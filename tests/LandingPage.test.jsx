import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import LandingPage from "../src/pages/LandingPage";
import { BrowserRouter } from "react-router-dom";

describe("The Landing Page", () => {
  test("Should render page", () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );

    const title = screen.getByText(/THE BEST DIGITAL GALLERY/i);

    expect(title).toBeInTheDocument();
  });
});
