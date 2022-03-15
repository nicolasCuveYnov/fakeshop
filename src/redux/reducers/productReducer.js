import { ActionsTypes } from "../constants/actionsTypes"

const initialState = {
    products:[{
        id:1,
        title:"Object",
        category:"Category"
    }]
}
export const productReducer = (state = initialState, {type,payload})=>{
    switch (type) {
        case ActionsTypes.SET_PRODUCTS:
            return state
        default:
            return state;
    }
}