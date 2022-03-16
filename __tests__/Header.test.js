import '@testing-library/jest-dom'
import React from "react";
import { render, screen } from "@testing-library/react";
import Header from '../containers/Header'

test('render Fakeshop in header'), () =>{
    render(<Header/>)
    const text = screen.getByText("Fakeshop").toBeInTheDocument()
}