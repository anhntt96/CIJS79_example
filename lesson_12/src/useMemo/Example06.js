import { useState, useMemo } from "react";

export default function Example06() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const [products, setProducts] = useState([]);

    const addItem = () => {
        setProducts([...products, { name, price: parseInt(price) }]);
    };

    const totalPrice = useMemo(() => {
        const result = products.reduce((sum, item) => {
            console.log("Đang tính toán tổng tiền");
            return sum + item.price;
        }, 0);
        return result;
    }, [products]);

    return (
        <div className="container mt-3">
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <br />
                <input
                    type="text"
                    placeholder="Price"
                    className="form-control"
                    value={price}
                    onChange={(e) => {
                        setPrice(e.target.value);
                    }}
                />
                <br />
                <button onClick={addItem} className="btn btn-success">
                    Add
                </button>
            </div>

            <div className="mt-4">
                Total price: {totalPrice}
                <ul>
                    {products.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.name} - {item.price}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
