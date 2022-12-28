import CartItem from "./CartItem";

const CartList = ({ cartItems }) => {
  return (
    <>
      <div className="container mt-3 mb-4">
        <h1 id="cart">Cart List</h1>
        {cartItems && cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default CartList;