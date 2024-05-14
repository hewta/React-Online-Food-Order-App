import { useDispatch, useSelector } from "react-redux";
import CartDisplay from "./CartDisplay";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    console.log("cartt itemsss: ",cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="cart-container">
            <h1 className="cartheading">Instamart Cart Items</h1>
            <button className="clearcart" onClick={handleClearCart}>Clear Cart</button>{" "}
            <div className="cartbox">
                <CartDisplay instData={cartItems} />
            </div>
        </div>
    );
}

export default Cart;