import '@testing-library/jest-dom'
import React from "react";
import { render, screen } from "@testing-library/react";
import Header from '../containers/Header'

describe("Header",()=>{
    it("renders title",()=>{
        render(<Header/>)
        expect(screen.getByText("Fakeshop")).toBeInTheDocument()
    })
})