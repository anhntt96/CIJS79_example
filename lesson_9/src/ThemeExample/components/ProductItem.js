import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";

const ProductItem = ({ product }) => {
  const context = useContext(ThemeContext);

  const {theme, changeTheme } = context;

  return (
    <div className="col">
      <div
        className={ theme === 'light' ? "card" : "card text-bg-dark"}
        style={{ width: "18rem" }}
      >
        <img src={product.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4>{product.name}</h4>
          <div>{product.price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
