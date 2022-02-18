import React from 'react';
import Menu from '../../components/Menu/Menu'
import Produto from '../../components/Produto/Produto'
import './Venda.css';

function Venda() {
  return (
    <div className="venda">
      <Menu />
      <div className='conteiner'>
        <div className='sidebar'>
            <Produto />
        </div>
      </div>
    </div>
  );
}

export default Venda;
