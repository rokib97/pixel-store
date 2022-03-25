import React from "react";
import { Button, Card } from "react-bootstrap";

const Product = ({ product }) => {
  const { img, name, price } = product;
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="">
        <Card>
          <Card.Img className="img-fluid p-3" variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Price: {price}</Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Product;
