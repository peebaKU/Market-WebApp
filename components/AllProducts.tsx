import Product from "./Product";

const AllProducts = () =>{
    const data = [
        {id: '1',productName: 'Product A',price: 199},
        {id: '2',productName: 'Product B',price: 299},
        {id: '3',productName: 'Product C',price: 399},
        {id: '4',productName: 'Product D',price: 499},
    ]

    return(
        <div className="flex flex-col border border-gray-400 my-3 w-2/3 rounded-sm shadow-md">
            {
                data.map((item, index)=>{
                    return(
                        <Product key={item.id} data={item} rownumber={index}/>
                    );
                })
            }
        </div>
    );
}

export default AllProducts;