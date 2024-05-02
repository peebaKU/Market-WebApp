import CartItem from "./CartItem";

const Cart = ({data,removeFromCart}) => {
    return(
        <>
            {
                data.map((item, index)=>{
                    return(
                        <CartItem
                            key={item.id}
                            data={item}
                            removeFromCart={removeFromCart}
                        />
                    )
                })
            }
        </>
    )
}

export default Cart;