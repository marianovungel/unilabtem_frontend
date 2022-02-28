import React from 'react'
import './Registrar.css'

export default function Login() {
  return (
    <div className="login">
        <div className='content'>
            <div className='logo'>
                <img className='logoImg' src='./image/u.png' alt='logo'/>
            </div>

            <div className='section'>
                <div className='form'>
                    <form className='loginForm'>
                        <h2>Criar conta</h2>
                        <input className='inputLogin' type='text' placeholder=' User' required />
                        <input className='inputLogin' type='password' placeholder=' Password' minLength='4' equired />
                        <input className='inputLogin' type='password' placeholder=' Password' minLength='4' equired />
                        <button className='inputLogin entrarbutton' type='submit'>Sing In</button>
                    </form>
                    <div className='criar'>
                        <smoll className='Termos'>Termos e Políticas ou Login</smoll>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}