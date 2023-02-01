import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Signup from "../src/pages/Signup";
import { BrowserRouter } from "react-router-dom";

describe("The Sign up Page", () => {
  test("Should render a log in form", () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const signupForm = screen.getByRole("form", { name: "signup" });
    expect(signupForm).toBeInTheDocument();
  });
});
