import { useSelector,useDispatch } from "react-redux";
import { addToCart,removeFromCart,resetCart } from "../redux/action";

function Cart() {

      const cartCount = useSelector((state) => state.cartCount)

      const dispatch = useDispatch();

      return (
            <div>
                  <h1>Cart Items {cartCount}</h1>
                  <button onClick={() => dispatch(addToCart())}>Add To cart</button>
                  <button
                        onClick={() => dispatch(removeFromCart())}
                        style={{ marginLeft: "10px" }}
                  >
                        Remove from Cart
                  </button>

                  <button
                        onClick={() => dispatch(resetCart())}
                        style={{ marginLeft: "10px" }}
                  >
                        Reset Cart
                  </button>
            </div>
      )
}

export default Cart;