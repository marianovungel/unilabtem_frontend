import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div className="login">
        <div className='content'>
            <div className='sidebar'>
                <div className='logo'>
                    <img className='logoImg' src='./image/u.png' alt='logo'/>
                </div>
                <div className='paragrafo'>
                    <h3>
                        Vem e conecte-se com a comunidade unilabiana,
                         e torne a sua estadia mais interável e facilitadora
                          estando de dentro de tudo
                    </h3>
                </div>
            </div>

            <div className='section'>
                <div className='form'>
                    <form className='loginForm'>
                        <h2>LOGIN</h2>
                        <input className='inputLogin' type='text' placeholder='User' />
                        <input className='inputLogin' type='password' placeholder='Password' minLength='4'/>
                        <button className='inputLogin entrarbutton' type='submit'>Entrar</button>
                    </form>
                    <div className='criar'>
                        <smoll className='Termos'>Termos e Políticas ou Criar conta</smoll>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}