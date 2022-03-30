import React from 'react'
import './menu.css'
import {useContext} from 'react'
import {Context} from '../../Context/Context'
import {Link} from 'react-router-dom'

export default function Menu({props}) {

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
            <Link to='desapego'><li>Desapego</li></Link>
            <Link to='/'><li>Venda</li></Link>
            <li>Oportunidades</li>
            <li>Vida na Unilab</li>
            <li onClick={hendSair}>Sair</li>
        </ul>
        <div className='fotoPerfil'>
          <i className="fa-solid fa-user"></i>
          <span  className='smollUsername'>{user.username}</span>
        </div>
    </div>
  )
}