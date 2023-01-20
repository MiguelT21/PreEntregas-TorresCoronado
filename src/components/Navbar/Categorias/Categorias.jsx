import React from 'react';

const Categorias = () => {
  return (

      <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><button className="btn btn-dark">Computadoras</button>
              
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Laptops</a></li>
              <li><a className="dropdown-item" href="#">Desktops</a></li>
              <li><a className="dropdown-item" href="#">Smartphones</a></li>
            </ul>
         
            <div>
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><button className="btn btn-dark">Computadoras</button>
              
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Laptops</a></li>
                <li><a className="dropdown-item" href="#">Desktops</a></li>
                <li><a className="dropdown-item" href="#">Smartphones</a></li>
              </ul>
            </div>
            
          </li>
          
          
          

  );
}

export default Categorias;
