import { useState } from "react";
import Product from "./Product";
import {Data} from "./Product"
import Cart from "./Cart";

const AllProducts = () =>{
    const data = [
        {id: '1',productName: 'Product A',price: 199},
        {id: '2',productName: 'Product B',price: 299},
        {id: '3',productName: 'Product C',price: 399},
        {id: '4',productName: 'Product D',price: 499},
    ]

    const [productsInCart, setProductInCart] = useState(Array<Data>);
    
    const addToCart = (product:Data) => {
        const updateCart:Array<Data> = [...productsInCart];
        const index = productsInCart.findIndex((item:Data) => product.id === item.id);
        //finded
        if(index != -1){
            updateCart[index] = {
                id:product.id,
                productName:product.productName,
                price:product.price
            }
        }
        else{
            updateCart.push(
                {
                    id:product.id,
                    productName:product.productName,
                    price:product.price
                }
            )
        }
        setProductInCart(updateCart);
    }

    const removeFromCart = (product:Data) => {
        const updateCart:Array<Data> = [...productsInCart];
        const index = productsInCart.findIndex((item:Data) => product.id === item.id);
        if(index != -1){
            updateCart.splice(index, 1);
            setProductInCart(updateCart);
        }
    }

    return(
        <div className="flex flex-col items-start justify-start sm:flex-row sm:justify-around min-h-screen w-full">
            <div className="flex flex-col border border-gray-400 my-3 w-2/3 rounded-sm shadow-md">
                <h3>Products</h3>
                {
                    data.map((item, index)=>{
                        return(
                            <Product 
                                key={item.id} 
                                data={item} 
                                rownumber={index}
                            />
                        );
                    })
                }
            </div>
            <div className="flex flex-col w-full mt-3 sm:w-6/12 border-2 border-gray-400 p-3 s,:m-3 shadow-md">
                <h3>Cart</h3>
                {productsInCart.length?
                <Cart
                    data={productsInCart}
                    removeFromCart={removeFromCart}
                />:
                <div className="flex justify-center items-center text-red-500 pb-5">
                        No Product In Cart
                </div>
                }
            </div>
        </div>
    );
}

export default AllProducts;