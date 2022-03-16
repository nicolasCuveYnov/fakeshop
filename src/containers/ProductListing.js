import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {setProducts} from '../redux/actions/productsActions'
import ProductComponent from './ProductComponent'
import axios from 'axios'


const ProductListing = () =>{
    const products = useSelector((state)=> state)
    const dispatch = useDispatch()

    const fetchProducts = async () =>{
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err)=>{
                console.log(err)
            })
            dispatch(setProducts(response.data))
    }
    useEffect(()=>{
        fetchProducts()
    },[])
    return(
        <div className="ui grid">
            <ProductComponent/>
        </div>
    )
}

export default ProductListing