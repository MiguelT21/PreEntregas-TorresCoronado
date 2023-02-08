import React from 'react';
import { useState } from 'react';
import "./ItemCounter.css";
  const ItemCounter = ({valInicial,stock}) => {
  const [contador, setContador] = useState(valInicial);
  const masCont= () => (contador < stock) && setContador(contador + 1) //contador = contador + 1
  const menosCont= ()=>(contador > valInicial)  && setContador(contador - 1)  //Operador ternario sin else
  return (
   
    <> 
      <button className='btn btn-dark' onClick={() =>menosCont()}>-</button>
        {contador}
      <button className='btn btn-dark' onClick={()=> masCont()}>+</button>
     
    
    </>
  );
}

export default ItemCounter;