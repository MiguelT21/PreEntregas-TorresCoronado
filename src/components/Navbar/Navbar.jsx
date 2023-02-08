import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Secciones from './Secciones/Secciones';
import Categorias_dispositivos from './Categorias_dispositivos/Categorias_dispositivos';
import Categorias_electronica from './Categorias_electronica/Categorias_electronica';
import CategoriasHardware from './Categorias_hardware/Categorias_hardware';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" >Ekonect</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <Secciones/>
          <Categorias_dispositivos/>
          <Categorias_electronica/>
          <CategoriasHardware/>
        </ul>
      </div>
      <CartWidget cantObj={1}/>
    </div>
  </nav>
  
  );
}

export default Navbar;
