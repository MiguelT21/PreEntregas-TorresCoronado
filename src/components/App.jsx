import React from 'react';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Navbar from './Navbar/Navbar';
const App = () => {
  return (
    <div>
      <Navbar/>
      <ItemListContainer content={"Hola soy un futuro producto (?)"}/>
    </div>
  )
}

export default App;
