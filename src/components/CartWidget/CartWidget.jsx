import React from 'react';

const CartWidget = ({cantObj}) => {
  return (
    <>
        <div className="media">
        <img src="shopping.png" className="mr-3"  />
      </div>
      <p>{cantObj}</p>
    </>
  );
}

export default CartWidget;
