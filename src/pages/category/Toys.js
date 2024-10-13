import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export const Toys =   () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios
          .get("http://localhost:3001/")
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
        setProducts(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [0]);
    return( <p></p>);
};

export default Toys;
