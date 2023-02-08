import React from 'react';
import { Link } from 'react-router-dom';

const Categorias_dispositivos = () => {
  return (

      <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><button className="btn btn-dark">Dispositivos</button>
              
            </a>
            <ul className="dropdown-menu">
              <li><Link className='dropdown-item' to={"/category/1"}>Laptops</Link></li>
              <li><Link className='dropdown-item' to={"/category/2"}>Desktops</Link></li>
              <li><Link className='dropdown-item' to={"/category/3"}>Smartphones</Link></li>
            </ul>
         
          
            
          </li>
          
          
          

  );
}

export default Categorias_dispositivos;
