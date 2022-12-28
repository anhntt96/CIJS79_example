import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import CartList from "../components/CartList";
import productList from "../data/products";
const Homepage = () => {
  // Header
  // ProductList
  // Cart

  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productList);
    console.log(products);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newProductList = productList.filter((item) =>
        item.name.includes(searchValue)
      );
      setProducts(newProductList);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchValue]);

  const handleAddItem = (p) => {
    setCartItems((prev) => {
      let exist = prev.find((item) => item.id === p.id);

      if (exist) {
        return prev.map((item) =>
          item.id === p.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...p, quantity: 1 }];
    });
  };

  return (
    <>
      <Header cartItems={cartItems} />

      <div className="container mt-4">
        <div className="mb-3 w-50">
          <input
            type="email"
            className="form-control"
            placeholder="Search text..."
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
        </div>
      </div>
      <ProductList
        products={products}
        handleAddItem={handleAddItem}
        searchValue={searchValue}
      />

      <CartList cartItems={cartItems} />
    </>
  );
};

export default Homepage;
