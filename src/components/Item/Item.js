import React from "react";
import "./Item.css";

const Item = ({ item }) => {
  console.log(item);
  return (
    <div className="single-item p-5 mb-4">
      <p>{item.name}</p>
    </div>
  );
};

export default Item;
