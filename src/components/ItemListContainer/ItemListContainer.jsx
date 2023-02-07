import React from 'react';
import { useState,useEffect } from 'react';
import ItemList from '../itemList/itemList';
const ItemListContainer = () => {
  const[productos,setProductos]=useState([])
  useEffect(()=>{
    fetch('./json/productos.json')
    .then(response => response.json())
    .then(products =>{
      const productsList=ItemList({products})
      console.log(productsList)
      setProductos(productsList)
    })
  },[])
  return (
  <div className='row cardProductos'>
    {productos}
  </div>
  );
}

export default ItemListContainer;
