import React from 'react';
import CartWidget from './components/CartWidget/CartWidget';
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/Counter';
import Interfaz from './components/Interfaz/Interfaz';
const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <CartWidget cantObj={8}/>
      <Counter/> */}
      <Interfaz/>
    </div>
  )
}

export default App;
