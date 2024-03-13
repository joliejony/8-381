import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/apiService';
import { useProductsContext } from '../context/ProductsContext';

const ProductList = () => {
  const { products, setProducts } = useProductsContext();

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data.products);
    };
    getProducts();
  }, [setProducts]);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};

export default ProductList;






// src/components/ProductList.js PART C UPDATE ONCE WE FINISH C
/*
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/apiService';
import { useProductsContext } from '../context/ProductsContext';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const { products, setProducts } = useProductsContext();
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data.products);
    };
    getProducts();
  }, [setProducts]);

  return (
    <div className="list-group">
      {products.map((product, index) => (
        <button
          key={product.id}
          className="list-group-item d-flex justify-content-between align-items-center hover-highlight"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <span>{index + 1}. {product.title}</span>
        </button>
      ))}
    </div>
  );
};

export default ProductList;
*/
