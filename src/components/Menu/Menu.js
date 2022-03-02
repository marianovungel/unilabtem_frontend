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
        <menu className='menuList'>
            <h3>Desapego</h3>
            <h3>Venda</h3>
            <h3>Oportunidades</h3>
            <h3>Vida na Unilab</h3>
            <h3 onClick={hendSair}>Sair</h3>
        </menu>
        <div className='fotoPerfil'>
            <img className="fotoPerfilImg" src="https://fotografiamais.com.br/wp-content/uploads/2018/06/ensaio-fotografico-casal-ideias-ensaio-de-casal-diferente-fotos-de-casal-namorado-730x411.jpg" alt="logoUnilabtem" />
        </div>
    </div>
  )
}