import React from 'react';
import { Link } from "react-router-dom";
const CartWidget = ({cantObj}) => {
  return (
    <>
        <div className="media">
        <Link className="nav-link" to={'/cart'}><img src="shopping.png" className="mr-3"  /></Link>
      </div>
      <p>{cantObj}</p>
    </>
  );
}

export default CartWidget;
