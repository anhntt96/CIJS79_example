import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/data";
const ProductDetail = () => {
    // Lam sao lay duoc id
    const params = useParams();
    console.log(params);

    const product = products.find((item) => item.id.toString() == params.id);

    return (
        <div>
            <div>ID: {product.id}</div>
            <div>Name: {product.name}</div>
        </div>
    );
};

export default ProductDetail;
