import React from 'react'
import './menu.css'
import {useContext} from 'react'
import {Context} from '../../Context/Context'

export default function Menu() {

  const { user, dispatch } = useContext(Context)

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
          <i class="fa-solid fa-user"></i>
          <smoll  className='smollUsername'>{user.username}</smoll>
        </div>
    </div>
  )
}