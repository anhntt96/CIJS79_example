const ProductItem = ({ product, handleAddItem }) => {
  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }}>
        <img src={product.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4>{product.name}</h4>
          <div>{product.price}</div>
          <button className="btn btn-primary w-100" onClick={ () => handleAddItem(product)}>Add Item</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
