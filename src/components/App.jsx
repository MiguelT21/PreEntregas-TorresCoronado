import React from 'react';
import CartWidget from './CartWidget/CartWidget';
import Navbar from './Navbar/Navbar';
import Counter from './Counter/Counter';
const App = () => {
  return (
    <div>
      <Navbar/>
      <CartWidget cantObj={8}/>
      <Counter/>
    </div>
  )
}

export default App;
