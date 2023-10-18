import React, {useState}from "react";
import Button from "../UI/Button";

const ProductForm = (props) => {

    const [enteredProductId, setEnteredProductId] = useState("");
  const [enteredProductPrise, setEnteredProductPrise] = useState("");
  const [enteredProductProduct, setEnteredProductProduct] = useState("");
  const [enteredproductType, setEnteredProductType] = useState('');

  const idChangeHandler = (event) => {
    setEnteredProductId(event.target.value);
  };

  const priseChangeHandler = (event) => {
    setEnteredProductPrise(event.target.value);
  };

  const productChangeHandler = (event) => {
    setEnteredProductProduct(event.target.value);
  };

  const productTypeChangeHandler = (event)=>{
    setEnteredProductType(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    
    const productData = {
      productId: enteredProductId,
      prise: enteredProductPrise,
      product: enteredProductProduct,
      productType: enteredproductType,
    };
    localStorage.setItem(enteredProductId, JSON.stringify(productData))
    props.onAddProduct(enteredProductId, enteredProductPrise, enteredProductProduct, enteredproductType );
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={props.classes}>
        <label>Product ID:</label>
        <input
          type="number"
          value={enteredProductId}
          onChange={idChangeHandler}
        />

        <label>Selling Prise:</label>
        <input
          type="number"
          value={enteredProductPrise}
          onChange={priseChangeHandler}
        />

        <label>Product Name:</label>
        <input
          type="text"
          value={enteredProductProduct}
          onChange={productChangeHandler}
        />
        <label>Choose a category:</label>
        <select value={enteredproductType} onChange={productTypeChangeHandler}>
          <option>--Select Type--</option>
          <option value='Electronic' >Electronic Items</option>
          <option value='Food'>Food Items</option>
          <option value='Skincare'>Skincare Items</option>
        </select>

        <Button type='submit'>Add Product</Button>
      </div>
    </form>
  );
};

export default ProductForm;
