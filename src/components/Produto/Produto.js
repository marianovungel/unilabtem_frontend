import React from 'react'
import api from '../../services/api'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import './Produto.css'

export default function Produto() {
  const history = useHistory();

    //passando dados via location
    

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
  

//   const location = {
//     pathname: `/post/${produtoVenda?.id}`,
//     state: produtoVenda,
// }

  const URLImg = "http://localhost:8000/img/";
  return (
    <>
        {produtoVenda?.map((post)=>(
          <div className="Produto"  onClick={() => history.push(`/post/${post?.id}`, post)}  key={post?.photo}>
            <div className='imgProduto'>
                <img className='imagemCard' src={URLImg+post?.photo} alt='imagem'/>
            </div>
            <div className='nomePreco'>
                <h3 className='valorNome'>{post?.title}</h3>
                <h3 className='valorNome'>R$ {post?.preco}</h3>
            </div>
          </div>))}
    </>
  );
}