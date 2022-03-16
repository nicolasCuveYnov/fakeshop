import '@testing-library/jest-dom'
import React from "react";
import {Provider} from 'react-redux'
import store from '../redux/store'
import {render, screen } from "@testing-library/react";
import ProductListing from '../containers/ProductListing'

describe("Filtering buttons",()=>{
    it("renders All filter button",()=>{
        render(
        <Provider store={store}>
            <ProductListing/>
        </Provider>)
        expect(screen.getByRole("button",{ name: "All"}))
    })
    it("renders Jewelery filter button",()=>{
        render(
        <Provider store={store}>
            <ProductListing/>
        </Provider>)
        expect(screen.getByRole("button",{ name: "Jewelery"}))
    })
    it("renders Electronics filter button",()=>{
        render(
        <Provider store={store}>
            <ProductListing/>
        </Provider>)
        expect(screen.getByRole("button",{ name: "Electronics"}))
    })
    it("renders Men clothing filter button",()=>{
        render(
        <Provider store={store}>
            <ProductListing/>
        </Provider>)
        expect(screen.getByRole("button",{ name: "Men's clothing"}))
    })
    it("renders Women clothing clothing filter button",()=>{
        render(
        <Provider store={store}>
            <ProductListing/>
        </Provider>)
        expect(screen.getByRole("button",{ name: "Women's clothing"}))
    })
})