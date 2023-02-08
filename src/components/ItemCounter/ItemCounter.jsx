import React from 'react';
import { useState } from 'react';
import "./ItemCounter.css";
  const ItemCounter = () => {
  const valor=0;
  const [contador, setContador] = useState(0);
  const masCont= () => setContador(contador+1);
  const menosCont= ()=>setContador(contador-1);
  return (
   
    <> 
      <button className='btn btn-dark' onClick={() =>menosCont()}>-</button>
        {contador}
      <button className='btn btn-dark' onClick={()=> masCont()}>+</button>
      <button id="prueba" > Agregar al carrito</button>
     
    
    </>
  );
}

export default ItemCounter;