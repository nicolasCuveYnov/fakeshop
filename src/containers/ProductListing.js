import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {setProducts} from '../redux/actions/productsActions'
import ProductComponent from './ProductComponent'
import axios from 'axios'


const ProductListing = () =>{
    const products = useSelector((state)=> state.allProducts.products)
    const dispatch = useDispatch()

    const fetchProducts = async () =>{
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err)=>{
                console.log(err)
            })
            dispatch(setProducts(response.data))
    }
    const fetchProductsByCat = async (cat) =>{
        const response = await axios
            .get("https://fakestoreapi.com/products/category/"+cat)
            .catch((err)=>{
                console.log(err)
            })
            dispatch(setProducts(response.data))
    }
    useEffect(()=>{
        fetchProducts()
    },[])

    return(
        <>
            <div className="ui stackable menu">
                <div className="item">
                    <p>Filter by category</p>
                </div>
                <button className="ui button" onClick={()=>fetchProducts()}>All</button>
                <button className="ui button" onClick={()=>fetchProductsByCat("jewelery")}>Jewelery</button>            
                <button className="ui button" onClick={()=>fetchProductsByCat("electronics")}>Electronics</button>
                <button className="ui button" onClick={()=>fetchProductsByCat("men's clothing")}>Men's clothing</button>
                <button className="ui button" onClick={()=>fetchProductsByCat("women's clothing")}>Women's clothing</button>
            </div>
            <div className="ui five column doubling grid">
                <ProductComponent/>
            </div>
        </>
    )
}

export default ProductListing