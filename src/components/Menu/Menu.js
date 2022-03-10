import React from 'react'
import './menu.css'
import {useContext} from 'react'
import {Context} from '../../Context/Context'

export default function Menu() {

  const {dispatch} = useContext(Context)

  const hendSair = ()=>{
    dispatch({type: "LOGOUT"})
  }

  return (
    <div className="menu">
        <div className='logo'>
            <img className='imagemLogo' src="./image\unilabtem.png" alt="logoUnilabtem" />
        </div>
        <ul className='menuList'>
            <li>Desapego</li>
            <li>Venda</li>
            <li>Oportunidades</li>
            <li>Vida na Unilab</li>
            <li onClick={hendSair}>Sair</li>
        </ul>
        <div className='fotoPerfil'>
            <img className="fotoPerfilImg" src="https://fotografiamais.com.br/wp-content/uploads/2018/06/ensaio-fotografico-casal-ideias-ensaio-de-casal-diferente-fotos-de-casal-namorado-730x411.jpg" alt="logoUnilabtem" />
        </div>
    </div>
  )
}