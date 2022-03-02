import React from 'react';
import Menu from '../../components/Menu/Menu'
import Produto from '../../components/Produto/Produto'
import './Venda.css';
import {useState, useContext} from 'react'
import {Context} from '../../Context/Context'
import api from '../../services/api'
// import Swal from 'sweetalert2'

function Venda() {

  const [formm, setFormm] = useState("none")
  const [formmbutton, setFormmbutton] = useState("flex")
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null)

  const cadastrarPost = ()=>{
    const formUp = "flex";
    const formRe = "none"
    setFormm(formUp);
    setFormmbutton(formRe)
  }
  const cadastrarPostResset = ()=>{
    const formRe = "flex";
    const formUp = "none";
    setFormm(formUp);
    setFormmbutton(formRe)
  }

  const { user } = useContext(Context)

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      data.append("key", file);
      newPost.photo = filename;
      try{
        const res =  await api.post("/upload", data);
        console.log(res)
      }catch(err){

      }
    }
    try{
      await api.post("/produto", newPost);
      // window.location.replace("/venda/" + res.data._id)
    }catch(err){

    }
    
  }

  return (
    <div className="venda">
      <Menu />
      <div className='conteiner'>
        <div className='cadastrarProduto'>
          <button className='produtoCadastar' onClick={cadastrarPost} style={{display: `${formmbutton}`}}>Cadastrar Produto</button>
          
          <form className='formProduto' onSubmit={handleSubmit} style={{display:`${formm}`}}>
            <h2 className='produtoFormModal'>Cadastrar Produto</h2>
            <input className='fotoProduto' type='file' onChange={(e)=> setFile(e.target.files[0])} />
            <input className='inputProduto' type='text' placeholder='Titulo' onChange={(e)=> setTitle(e.target.value)} />
            <textarea className="story" rows="10" cols="33" onChange={(e)=> setDesc(e.target.value)} ></textarea>
            <button className='inputProduto colorbutton' type='submit' onClick={cadastrarPostResset}> Cadastrar </button>
          </form>
          
        </div>
        <div className='sidebar'>
            <Produto />
        </div>
      </div>
    </div>
  );
}

export default Venda;
