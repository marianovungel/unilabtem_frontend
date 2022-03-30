import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import {useRef, useContext} from 'react'
import {Context} from '../../Context/Context'
import api from '../../services/api'

export default function Login() {

    const userRef = useRef();
    const passwordRef = useRef();
    const {isFetching, dispatch } = useContext(Context)

    const handleSubmit = async (e)=>{
        e.preventDefault();
        dispatch({ type: "LOGIN_START"})
        try{
            const res = await api.post("/auth/router/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data})
            console.log(res.data)
        }catch(err){
            dispatch({ type: "LOGIN_FAILURE"})
        }
    }

  return (
    <div className="login">
        <div className='content'>
            <div className='logoLogin'>
                <img className='logoImg' src='./image/u.png' alt='logo'/>
            </div>

            <div className='section'>
                <div className='form'>
                    <form className='loginForm' onSubmit={handleSubmit}>
                        <h2>LOGIN</h2>
                        <input className='inputLogin' type='text' placeholder=' User' ref={userRef} />
                        <input className='inputLogin' type='password' placeholder=' Password' minLength='4' ref={passwordRef} />
                        <button className='inputLogin entrarbutton' type='submit' disabled={isFetching}><Link to='/venda'>Sing In</Link></button>
                    </form>
                    <div className='criar'>
                        <span className='Termos'><Link to='#'>Termos e Políticas</Link> ou <Link to='/registrar'>Criar conta</Link></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}