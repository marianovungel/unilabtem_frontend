import React from 'react'
import api from '../../services/api'
import { useEffect, useState } from 'react'
import './Produto.css'

export default function Produto() {

  const [produtoVenda, setProdutoVenda] = useState([])
  const getProdutoVenda = async ()=>{
    try{
      const response = await api.get('/produto');
      const res = response.data;

      if(res.error){
        alert(res.message);
        return false;
      }

      setProdutoVenda(res);
      console.log(res)

    }catch(err){
      alert(err.message);
    }
  }

  useEffect(() => {
    getProdutoVenda();
  }, [])

  return (
    <>
        {produtoVenda?.map((post)=>(
          <div className="Produto">
            <div className='imgProduto'>
                <img src={post?.imagem} alt='imagem'/>
            </div>
            <div className='nomePreco'>
                <h2>{post?.nome}</h2>
                <h2>{post?.preco}</h2>
            </div>
          </div>))}
    </>
  );
}