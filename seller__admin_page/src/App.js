import React, { useState } from "react";

import "./App.css";
import ProductForm from "./components/Products/ProductForm";
import ProductList from "./components/Products/ProductList";

function App() {
  const [productsList, setProductsList] = useState([]);

  const newProductHandler = (NproductId, Nprise, Nproduct, Ntype) => {
    setProductsList((prevProducts) => {
      return [
        ...prevProducts,
        {
          productId: NproductId,
          prise: Nprise,
          product: Nproduct,
          productType: Ntype
        },
      ];
    });
  };

  const deleteItemHandler = productsId => {
    console.log('567')
    setProductsList(prevProducts => {
      console.log('123',prevProducts)
      const updatedProducts = prevProducts.map(product => product.productId !== productsId);
      return updatedProducts;
    });
  };

  return (
    <div className="App">
      <ProductForm onAddProduct={newProductHandler} onClickS={deleteItemHandler}></ProductForm>
      <ProductList products={productsList}></ProductList>
    </div>
  );
}

export default App;
