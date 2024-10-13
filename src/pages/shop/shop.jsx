import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { ProductList } from "../cart/cart-item";
export const Shop = () => {
  ProductList();
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>valanter Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
