import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [phones, setPhones] = useState([]);
  console.log(phones);
  useEffect(() => {
    fetch("phones.json")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-9">
          <div className="row g-4">
            {phones.map((phone) => (
              <Product product={phone} key={phone.id} />
            ))}
          </div>
        </div>
        <div className="col-lg-3 bg-danger">
          <h2>hi</h2>
        </div>
      </div>
    </div>
  );
};

export default Products;
