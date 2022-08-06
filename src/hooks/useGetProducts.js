import { useEffect, useState } from 'react';
import axios from 'axios';
const API = 'https://api.escuelajs.co/api/v1/products';
const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios(API);
      setProducts(response.data);
    }
    fetchData();
  }, []);

  return products;
};

export default useGetProducts;
