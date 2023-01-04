import productList from "../data/products";
import ProductItem from "./ProductItem";

const Content = () => {
    const products =  productList?.map((pItem) => {
        return <ProductItem key={pItem.id} product={pItem} />;
      });

    return (
        <div className="container mt-4">
          <div className="row row-cols-md-3 g-4">{products}</div>
        </div>
    );
}

export default Content;