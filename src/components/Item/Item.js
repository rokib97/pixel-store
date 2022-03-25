import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Item.css";

const Item = ({ item }) => {
  const { img, name } = item;
  return (
    <div className="single-item p-2 mb-3">
      <img className="rounded-circle" src={img} alt="" />
      <h6>{name}</h6>
      <button>
        <FontAwesomeIcon className="" icon={faTrashCan} />
      </button>
    </div>
  );
};

export default Item;
