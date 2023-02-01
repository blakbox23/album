import { describe, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import GoogleSignin from "../src/components/GoogleSignin";
import { BrowserRouter } from "react-router-dom";

describe("The Google Sign in button", () => {
    test("Should call the function when clicked", async() => {
      const mockHandleClick = vi.fn();
      render(
        <BrowserRouter>
          <GoogleSignin />
        </BrowserRouter>
      );
  
    //   await fireEvent.click(screen.getByRole('button'));
    //   expect(mockHandleClick).toHaveBeenCalled();
    });

})