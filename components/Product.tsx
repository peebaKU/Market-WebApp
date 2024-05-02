interface Data{
    id:string;
    productName:string;
    price:number;
}

interface Order{
    data:Data;
    rownumber:number;
}

const Product = (props:Order) => {
    const bgColor = (Number(props.rownumber) % 2 === 0)? "bg-gray-100":"bg-gray-200";
    return(
        <div className={`flex items-center h-10 w-full ${bgColor}`}>
            <div className="text-center w-5-12 bg-red-500">Product Name: </div>
            <div className="w-4/12 ml-3 text-left">{props.data.productName}</div>
            <div className="w-2/12 text-left">Price: </div>
            <div className="w-2/12 text-left">{props.data.price}</div>
        </div>
    );
}

export default Product;