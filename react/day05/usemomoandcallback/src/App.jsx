import React, { useState, useMemo, useCallback } from "react";
import ProductItem from "./ProductItem";

const productsData = [
  {
    id: 1,
    name: "iPhone 15",
    category: "Mobile",
    price: 80000,
  },
  {
    id: 2,
    name: "Samsung TV",
    category: "Electronics",
    price: 50000,
  },
  {
    id: 3,
    name: "Nike Shoes",
    category: "Fashion",
    price: 7000,
  },
  {
    id: 4,
    name: "MacBook Air",
    category: "Laptop",
    price: 100000,
  },
  {
    id: 5,
    name: "Boat Headphones",
    category: "Accessories",
    price: 3000,
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [counter, setCounter] = useState(0);

  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");

    return productsData.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const cartTotal = useMemo(() => {
    console.log("Calculating cart total...");

    return cart.reduce((total, item) => {
      return total + item.price;
    }, 0);
  }, [cart]);

  const handleAddToCart = useCallback((product) => {
    setCart((prev) => [...prev, product]);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Search & Cart App</h1>

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <hr />

      <input
        type="text"
        placeholder="Search Product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
        }}
      />

      <h2>Cart Count: {cart.length}</h2>
      <h2>Cart Total: ₹{cartTotal}</h2>

      <hr />

      {filteredProducts.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}

export default App;