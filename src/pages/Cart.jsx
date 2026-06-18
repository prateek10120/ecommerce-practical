import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h3>Your cart is empty 🛒</h3>
          <p>Add some products to get started.</p>
        </div>
      ) : (
        <>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Total: ₹{total}</h3>

            <button className="checkout-btn">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;