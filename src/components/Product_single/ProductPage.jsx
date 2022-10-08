import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//
import { getProduct } from "../../services/api";

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    const fetchAPI = async () => {
      setProduct(await getProduct(productId));
    };

    fetchAPI();
  }, []);
  return <div>{product.title}</div>;
};

export default ProductPage;
