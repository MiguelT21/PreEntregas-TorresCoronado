import React from 'react';

const CategoriasHardware = () => {
  return (
    <li className="nav-item dropdown">
    <div>
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><button className="btn btn-dark">Hardware</button>
          
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Tarjeta Graficas</a></li>
            <li><a className="dropdown-item" href="#">Procesadores</a></li>
            <li><a className="dropdown-item" href="#">Placa Madre</a></li>
          </ul>
        </div>
        </li>
  );
}

export default CategoriasHardware;
