import { useState } from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import CartList from "../components/CartList";
import products from "./../data/products";
import users from "./../data/users";
import Pagination from "../components/Pagination";
import LoginForm from "../components/LoginForm";
const Homepage = () => {
  // Header
  // ProductList
  // Cart

  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    let isOk = false;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username && users[i].password === password) {
        setIsLoggedIn(true);
        isOk = true;
        break;
      }
    }

    if (!isOk) {
      alert("username, password is incorrect");
    }
  };

  const handleAddItem = (p) => {
    setCartItems((prev) => {
      console.log("old value: cartItems ", cartItems);
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
      <Header
        cartItems={cartItems}
        time={1}
        username={username}
        isLoggedIn={isLoggedIn}
      />
      {!isLoggedIn && (
        <LoginForm
          username={username}
          setUsername={setUsername}
          handleLogin={handleLogin}
          password={password}
          setPassword={setPassword}
        />
      )}

      {isLoggedIn && (
        <>
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

          <Pagination />
          <CartList cartItems={cartItems} />
        </>
      )}
      {/* Searchbox */}
    </>
  );

  // const [cartItems, setCartItems] = useState([]);

  // const handleAddItem = (p) => {

  //   setCartItems((prev) => {

  //     let exist = prev.find((item) => item.id === p.id);

  //     if (exist) {
  //       return prev.map((item) =>
  //         item.id === p.id ? { ...item, quantity: item.quantity + 1 } : item
  //       );
  //     }
  //     return [...prev, { ...p, quantity: 1 }];
  //   });
  // };
  // return (
  //   <>

  //     <Header cartItems={cartItems} />
  //     <ProductList products={products} handleAddItem={handleAddItem} />
  //     <CartList cartItems={cartItems} />
  //   </>
  // );
};

export default Homepage;
