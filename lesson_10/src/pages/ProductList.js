import React from "react";
import { Link } from "react-router-dom";
import products from "../data/data";

const ProductList = () => {
    return (
        <div>
            {products.map((item) => {
                return (
                    <div className="mt-3" key={item.id}>
                        <Link to={item.id.toString()}> {item.name}</Link>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductList;
