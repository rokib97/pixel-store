import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [phones, setPhones] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart);
  useEffect(() => {
    fetch("phones.json")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);

  const handleAddToCart = (product) => {
    const newProduct = cart.find((pd) => pd.id === product.id);
    if (!newProduct) {
      if (cart.length < 4) {
        const newCart = [...cart, product];
        setCart(newCart);
      } else {
        alert("You can not add more than four");
      }
    } else {
      alert("already added");
    }
  };
  const handleReset = () => {
    setCart([]);
  };
  const handleChoseOne = () => {
    const random = cart[Math.floor(Math.random() * cart.length)];
    setCart([random]);
  };
  return (
    <div className="container my-5">
      <h1 className="text-center fw-bolder py-3">New on Pixel Store.</h1>
      <div className="row">
        <div className="col-lg-9">
          <div className="row g-4">
            {phones.map((phone) => (
              <Product
                product={phone}
                key={phone.id}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
        <div className="col-lg-3 sidebar">
          <h2 className="text-center fw-bold">Selected Phones</h2>
          {cart.map((item) => (
            <Item item={item} key={item.id} />
          ))}
          <button
            onClick={handleChoseOne}
            className="my-2 btn w-100 btn-outline-primary text-dark fw-bolder"
          >
            CHOOSE 1 FOR ME
          </button>
          <br />
          <button
            onClick={handleReset}
            className=" btn w-100  btn-outline-primary text-dark fw-bolder"
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
