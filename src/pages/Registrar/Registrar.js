import React from 'react'
import './Registrar.css'
import {Link} from 'react-router-dom'

export default function Registrar() {
  return (
    <div className="login">
        <div className='content'>
            <div className='logoLogin'>
                <img className='logoImg' src='./image/u.png' alt='logo'/>
            </div>

            <div className='section'>
                <div className='form'>
                    <form className='loginForm'>
                        <h2>Criar conta</h2>
                        <input className='inputLogin' type='text' placeholder=' User' required />
                        <input className='inputLogin' type='password' placeholder=' Password' minLength='4' equired />
                        <input className='inputLogin' type='password' placeholder=' Password' minLength='4' equired />
                        <button className='inputLogin entrarbutton' type='submit'><Link to='/'>Registrar</Link></button>
                    </form>
                    <div className='criar'>
                        <smoll className='Termos'><Link to='#'>Termos e Políticas</Link> ou <Link to='/'>Login</Link></smoll>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}