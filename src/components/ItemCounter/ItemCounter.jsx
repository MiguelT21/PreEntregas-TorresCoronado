import React from 'react';
import { useState } from 'react';
import "./ItemCounter.css";
import { toast } from 'react-toastify';import "./ItemCounter.css";

const ItemCounter = ({ valInicial, stock, onAdd }) => {
  const [contador, setContador] = useState(valInicial);

  const masCont = () => contador < stock && setContador(contador + 1);
  const menosCont = () => contador > valInicial && setContador(contador - 1);
  const agregarCarrito = () => {
    onAdd(contador);
    toast.success(`Agregaste ${contador} productos al carrito!`, {
      position: "top-right", // Posición del toast
      autoClose: 3000, // Duración en milisegundos
      closeOnClick: true, // Cerrar el toast cuando se hace clic en él
      pauseOnHover: true, // Pausar el temporizador cuando se pasa el mouse sobre el toast
      draggable: true, // Permitir arrastrar el toast
      progress: undefined, // Personalizar la barra de progreso
      className: "toast-success" // Clase CSS personalizada para el toast
    });
  };
  

  return (
    <div className="item-counter">
      <button className="btn btn-dark" onClick={menosCont}>
        -
      </button>
      <span>{contador}</span>
      <button className="btn btn-dark" onClick={masCont}>
        +
      </button>
      <button className="btn btn-dark add-carrito" onClick={agregarCarrito}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCounter;
