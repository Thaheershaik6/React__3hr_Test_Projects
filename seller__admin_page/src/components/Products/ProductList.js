import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ProductType from "./ProductType";

const ProductList = (props) => {

  
  const deleteProductHandler = () => {
    props.products.map((product) => localStorage.removeItem(product.productId));
  };

  return (
    <Card>
      <h1>Products</h1>
      <ProductType></ProductType>
      {props.products.map((product) => (
        <li key={product.productId}>
          {product.product} {product.productType} - {product.prise}
          <Button type="delete" onClick={deleteProductHandler}>
            Delete
          </Button>
        </li>
      ))}
    </Card>
  );
};

export default ProductList;
