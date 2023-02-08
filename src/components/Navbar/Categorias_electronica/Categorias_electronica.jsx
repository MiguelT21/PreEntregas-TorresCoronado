import React from 'react';
import { Link } from 'react-router-dom';
const CategoriasElectronica = () => {
  return (
    <li className="nav-item dropdown">
        <div>
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><button className="btn btn-dark">Electronica</button>
              
              </a>
              <ul className="dropdown-menu">
                <li><Link className='dropdown-item' to={"/category/4"}>Monitores</Link></li>
              <li><Link className='dropdown-item' to={"/category/5"}>Camaras</Link></li>
              <li><Link className='dropdown-item' to={"/category/6"}>Televisiones</Link></li>
              </ul>
            </div>
            </li>
  );
}

export default CategoriasElectronica;
