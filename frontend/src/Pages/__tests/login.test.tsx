import * as React from "react";
import { ProfilePage } from "../ProfilePage";
import { render, screen } from "@testing-library/react";

describe('Login', function () {
    test('Render Login Page', function () {
        render(<ProfilePage />);
        const linkElement = screen.getByText(/Login/i);
        expect(linkElement).toBeInTheDocument();
    })
});