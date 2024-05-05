"use client"
import { useReducer} from "react";
import Product from "./Product";
import {Data} from "./Product"
import Cart from "./Cart";
import reducer from "@/store/reducer";
import AddProductForm from "./AddProductForm";

const AllProducts  = ({data}) =>{
    const [products, dispatch] = useReducer(reducer,data)
    return(
        <div className="flex flex-col justify-start items-center min-w-full min-h-screen">
            <div className="text-2xl text-gray-600 my-2">
                Product List
            </div>
            {/* show form for display adding products */}
            <AddProductForm dispatch={dispatch}></AddProductForm>
            <div className="flex justify-start items-center content-start flex-wrap w-full">
                {
                    products.length !== 0 && products.map((item, index)=>{
                        return(
                            <Product key={item.id} data={item} dispatch={dispatch} />
                        )
                    })
                }
                {
                    products.length === 0 && 
                    <div className="flex justify-center items-center pb-80 text-blue-500 text-xl mx-auto min-h-screen">
                        <div><h3>Product not found</h3></div>
                    </div>
                }
            </div>
        </div>
    );
}

export default AllProducts;