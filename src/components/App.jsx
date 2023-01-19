import React from 'react';
import CartWidget from './CartWidget/CartWidget';
import Navbar from './Navbar/Navbar';
const App = () => {
  return (
    <div>
      <Navbar/>
      <CartWidget cantObj={8}/>
    </div>
  )
}

export default App;
