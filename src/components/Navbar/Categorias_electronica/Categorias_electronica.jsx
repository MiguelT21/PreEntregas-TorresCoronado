import React from 'react';

const CategoriasElectronica = () => {
  return (
    <li className="nav-item dropdown">
        <div>
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><button className="btn btn-dark">Electronica</button>
              
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Monitores</a></li>
                <li><a className="dropdown-item" href="#">Camaras</a></li>
                <li><a className="dropdown-item" href="#">Televisiones</a></li>
              </ul>
            </div>
            </li>
  );
}

export default CategoriasElectronica;
