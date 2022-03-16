import '@testing-library/jest-dom'
import React from "react";
import {Provider} from 'react-redux'
import store from '../redux/store'
import {render, screen } from "@testing-library/react";
import ProductDetail from '../containers/ProductDetail'

describe("Product detail",()=>{
    it("renders Loading",()=>{
        render(
        <Provider store={store}>
            <ProductDetail />
        </Provider>)
        expect(screen.getByText("Loading...")).toBeInTheDocument()
    })
})