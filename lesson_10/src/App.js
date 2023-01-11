import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";

import About from "./components/About";
import Course from "./components/Course";
import Edit from "./components/Edit";
import Setting from "./components/Setting";

import "./App.css";

function App() {
    return (
        <>
            <Header />

            <div className="container mt-5">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<ProductList />}></Route>

                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/profile" element={<Profile />}>
                        <Route index element={<About />} />
                        <Route path="course" element={<Course />} />
                        <Route path="edit" element={<Edit />} />
                        <Route path="setting" element={<Setting />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
