import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import Product from "../Product/Product";

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
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="container my-5">
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
        <div className="col-lg-3">
          {cart.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
