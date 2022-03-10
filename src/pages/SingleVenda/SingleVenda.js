import React from 'react'
import Menu from '../../components/Menu/Menu'
import './SingleVenda.css'
import { useState, useEffect } from 'react';
import { useLocation} from 'react-router-dom';

export default function SingleVenda() {
  const location = useLocation();

  const [post, setPost] = useState({});
  

  useEffect(() => {
    setPost(location.state);
}, [location.state]);

const whatsappSend = () =>{
  const messageZap=`Olá ${post.username}. Gostaria de saber se o produto ${post.title} 
  que divulgou na plataforma UnilabTem no preço de R$${post.preco} 
  se ainda está a venda!`;

  window.open(`http://wa.me/+55${post.userwhatsapp}?text=${messageZap}`)
}
    
const URLImg = "http://localhost:8000/img/";

  return (
    <div className='conteinerSinglePostVenda'>
        <Menu />
        <div className='fullContent'>
          <div className='descricao'>
            <div className='imagemProdutoCardDiv'><img className='imagemProdutoCard' src={URLImg+post.photo} alt='img'/></div>
              <h2>{post.title}</h2>
            <div className='conteudo'>
              <div className='orgdescricao'><span>Nome</span><span>{post.title}</span></div>
              <div className='orgdescricao'><span>Preço</span><span>R$ {post.preco}</span></div>
              <div className='orgdescricao'><span>Vendedor</span><span>{post.username}</span></div>
              <div className='orgdescricao'><span>Contatos</span><span>{post.userwhatsapp}</span></div>
              <div className='orgdescSpan'><span>descrição</span><span>{post.desc}</span></div>
              <div className='buttonZapDiv'><button onClick={whatsappSend} className='buttonZap'>Enviar Zap</button></div>
            </div>
          </div>
        </div>
    </div>
  )
}
