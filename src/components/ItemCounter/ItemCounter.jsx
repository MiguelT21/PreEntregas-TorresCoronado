import React from 'react';
import { useState } from 'react';
import "./ItemCounter.css";
import { toast } from 'react-toastify';
  const ItemCounter = ({valInicial,stock,onAdd}) => {
  const [contador, setContador] = useState(valInicial);
  const masCont= () => (contador < stock) && setContador(contador + 1) //contador = contador + 1
  const menosCont= ()=>(contador > valInicial)  && setContador(contador - 1)  //Operador ternario sin else
  const agregarCarrito = () => {
    onAdd(contador)
    toast(`🦄 Agregaste ${contador} productos al carrito!`) 
  }
  return (
   
    <> 
      <button className='btn btn-dark' onClick={() =>menosCont()}>-</button>
        {contador}
      <button className='btn btn-dark' onClick={()=> masCont()}>+</button>
      <button className="btn btn-dark" onClick={() => agregarCarrito()}>Agregar al carrito</button>
    
    </>
  );
}

export default ItemCounter;