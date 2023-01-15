import { Route, Routes } from "react-router-dom";
// import NotFound from "./pages/NotFound";
// import Auth from "./pages/Auth";
// import Home from "./pages/Home";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import ProductList from "./pages/ProductList";
// import ProductDetail from "./pages/ProductDetail";
// import InvoicesList from "./pages/InvoicesList";
// import InvoicesDetail from "./pages/InvoicesDetails";
// import Cart from "./pages/Cart";
// import Profile from "./pages/Profile";
// import About from "./pages/About";
import {
  NotFound,
  Auth,
  Home,
  Register,
  Login,
  ProductList,
  ProductDetail,
  InvoicesList,
  InvoicesDetail,
  Cart,
  Profile,
  About,
} from "./pages";
import Header from "./components/Header";
import AuthRoute from "./utils/AuthRoute";

function App() {
  const token = localStorage.getItem("token");
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route element={<AuthRoute />}>
            <Route path="/" element={<Home />}>
              <Route index element={<ProductList />} />
              <Route path="invoices" element={<InvoicesList />} />
              <Route path="cart" element={<Cart />} />
              <Route path="profile" element={<Profile />} />
              <Route path="about" element={<About />} />
            </Route>
          </Route>
          <Route path="/invoices/:id" element={<InvoicesDetail />} />
          <Route path="/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
