import React from 'react'
import './Registrar.css'
import {Link, useHistory} from 'react-router-dom'
import {useState} from 'react'
import api from '../../services/api.js'

export default function Registrar() {

    const [username, setUsername] = useState("")
    const [whatsapp, setWhatsapp] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const history = useHistory()
    
    console.log(username)
    console.log(email)
    console.log(whatsapp)
    console.log(password)

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const res = await api.post("/auth/router/register", {
                username: username,
                email: email,
                whatsapp: whatsapp,
                password: password
            })
            console.log(res)
            history.goBack()
        }catch(err){}
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
                        <h2>Criar conta</h2>
                        <input className='inputLogin' type='text' placeholder='  User' onChange={e=>setUsername(e.target.value)} />
                        <input className='inputLogin' type='text' placeholder='  E-mail' onChange={e=>setEmail(e.target.value)} />
                        <input className='inputLogin' type='text' placeholder='  8599139-2625' onChange={e=>setWhatsapp(e.target.value)} />
                        <input className='inputLogin' type='password' placeholder='  Password' minLength='4' onChange={e=>setPassword(e.target.value)} />
                        <button className='inputLogin entrarbutton' type='submit'>Registrar</button>
                    </form>
                    <div className='criar'>
                        <span className='Termos'><Link to='#'>Termos e Políticas</Link> ou <Link to='/'>Login</Link></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}