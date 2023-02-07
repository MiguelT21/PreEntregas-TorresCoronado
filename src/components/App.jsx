import React from 'react';
import './App.css';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Navbar from './Navbar/Navbar';
const App = () => {
  return (
    <div>
      <Navbar/>
      <ItemListContainer/>
    </div>
  )
}

export default App;
