import React from 'react';
import { Link } from 'react-router-dom';
const CategoriasHardware = React.memo(() => {
  return (
    <li className="nav-item dropdown">
    <div>
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><button className="btn btn-dark">Hardware</button>
          
          </a>
          <ul className="dropdown-menu">
            <li><Link className='dropdown-item' to={"/category/7"}>Tarjeta Graficas</Link></li>
              <li><Link className='dropdown-item' to={"/category/8"}>Procesadores</Link></li>
              <li><Link className='dropdown-item' to={"/category/9"}>Placa Madre</Link></li>
          </ul>
        </div>
        </li>
  );
})

export default CategoriasHardware;
