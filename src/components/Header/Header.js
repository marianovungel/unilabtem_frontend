import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'


export default function Header() {

  return (
    <div className='colorHeader'>
        <nav className="navbar navbar-expand-lg navbar-light bg-blue">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link to='/habitacao/aluguel' className="nav-link active" aria-current="page" href="#">Aluguel</Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to='/habitacao/compartilhar' className="nav-link" href="#">Compartilhamento</Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/aluguel/cadastrando' className="nav-link" href="#">Divulgar Casa...</Link>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
</nav>
    </div>
  )
}
