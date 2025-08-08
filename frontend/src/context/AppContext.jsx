
import React, { createContext, useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [products, setProducts] = useState([])
  const baseUrl = "http://localhost:3000"

  const allProducts = async()=>{
      try {
        const response = await axios.get(`${baseUrl}/api/product/all`)
          setProducts(response.data.data)
        
      } catch (error) {
        console.log(error)
      }
  }

  useEffect(()=>{
    allProducts()
  },[])
  const contextValue = {
    products,
    baseUrl
  }
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider