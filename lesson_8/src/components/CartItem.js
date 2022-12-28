const CartItem = ({ item }) => {
  return (
    <>
      <div className="col-3">
        <b>{item.name}</b>
      </div>
      <div className="col-3">Quantity: {item.quantity}</div>
    </>
  );
};

export default CartItem;
