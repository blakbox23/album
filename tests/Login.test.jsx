import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Login from "../src/pages/Login";
import { BrowserRouter } from "react-router-dom";

describe("The Landing Page", () => {
  test("Should render a log in form", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const loginForm = screen.getByRole('form', { name: 'login' })
    expect(loginForm).toBeInTheDocument();
  });

//   test("Should call the login function ", () => {
//     render(
//       <BrowserRouter>
//         <Login />
//       </BrowserRouter>
//     );

//     const loginForm = screen.getByRole('form', { name: 'login' })
//     expect(loginForm).toBeInTheDocument();
//   });

  
});