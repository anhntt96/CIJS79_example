import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const { products, handleAddItem, searchValue } = props;

  const productsList = products && products
    .filter((item) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    })
    .map((pItem) => {
      return <ProductItem key={pItem.id} product={pItem} handleAddItem={handleAddItem} />;
    });

  return (
    <div>
      <div className="container mt-4">
        <div className="row row-cols-md-3 g-4">{productsList}</div>
      </div>
    </div>
  );
};

export default ProductList;
