import * as React from "react";
import { Login } from "../Login";
import { render, screen } from "@testing-library/react";

describe('Login', function () {
    it('Render Login Page', function () {
        render(<Login />);
        const linkElement = screen.getByText(/Login/i);
        expect(linkElement).toBeInTheDocument();
    })
});