import React from 'react'
import './Aluguel.css'
import Menu from '../../components/Menu/Menu'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import api from '../../services/api'

export default function Aluguel() {

    const [aluguel, setAluguel] = useState([]);;
    useEffect(()=>{
        const FetchDesapego = async () => {
            try{
                const res = await api.get("/aluguel")
                setAluguel(res.data);
            }catch(err){
                console.log(err)
            }
        }
    
        FetchDesapego();
    }, [])

    console.log(aluguel)
    const URLImg = "https://festupload.s3.amazonaws.com/";
  return (
    <div className='fullContentAluguel'>
        <Menu />
        <header className='headerAluguel'>
            <div className='flexHeaderAluguel'>
                <Link to='/habitacao/aluguel'>
                    <button id='alugarCasa' className='buttonHeaderAluguel'>Aluguel</button>
                </Link>
                <Link to='/habitacao/compartilhar'>
                    <button className='buttonHeaderAluguel'>Compartilhamento</button>
                </Link>
                <Link to='/habitacao/aluguel/cadastrar'>
                <button className='buttonHeaderAluguel'>Postar Casa...</button>
                </Link>
                <form className='formSearchAluguelHeader'>
                    <input className='inputParaPesquisarAluguel' type='search' placeholder='Pesquise por cidade...' minLength='1' />
                    <button type='submit' className='botaoDePesquisaAluguel'>Pesquisar...</button>
                </form>
            </div>
        </header>
        <div className='contentSideBar'>
            {aluguel.map((p)=>(
                <div className='cardAluguel' key={p?._id}>
                <img className='imgAluguelCard' src={URLImg + p.photo} alt='' />
                <div className='descPlaceAluguel'>
                    <div className='ajustPositionDesc'>
                        <p><i>Categoria</i>: <b>{p.categories}</b></p>
                        <p><i>Cidade</i>: <b>{p.cidade}</b></p>
                        <p><i>Preço</i>: <b>R${p.preco}</b></p>
                        <p><i>Status</i>: <b>Desponível</b></p>
                    </div>
                    <Link to={`/habitacao/aluguel/${p?._id}`}><button className='buttonHeaderAluguela'>Mais informações</button></Link>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}
