import React from 'react';

const CartWidget = ({cantObj}) => {
  return (
    <>
      <button className="btn btn-dark">Carrito</button>
      <p>{cantObj}</p>
    </>
  );
}

export default CartWidget;
