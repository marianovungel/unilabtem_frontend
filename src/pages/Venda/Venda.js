import React from 'react'
import Menu from '../../components/Menu/Menu'
import Produto from '../../components/Produto/Produto'
import './Venda.css';
import {useState, useContext} from 'react'
import {Context} from '../../Context/Context'
import api from '../../services/api'
// import Swal from 'sweetalert2'

function Venda() {

  const [preco, setPreco] = useState("")
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null)
  

  const { user } = useContext(Context)

  const handleSubmit = async ()=>{
    const newPost = {
      username: user.username,
      userwhatsapp: user.whatsapp,
      preco,
      title,
      desc,
    };
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try{
        const res =  await api.post("/upload", data);
        console.log(res)
      }catch(err){}
    }
    try{
      await api.post("/produto", newPost);
    }catch(err){}
  }

  
  return (
    <div className="venda">
      <Menu />
      <div className='conteiner'>
        <div className='cadastrarProduto'>
          <form className='formProduto' onSubmit={handleSubmit} >
            <h2 className='produtoFormModal'>Cadastrar Produto</h2>
            {file && (
              <div className='imgPostPreviw'>
                <img src={URL.createObjectURL(file)} alt='uploadImg' className='imgPostPreviw' />
              </div>
            )}
            <input className='fotoProduto' type='file' onChange={(e)=> setFile(e.target.files[0])} />
            <input className='inputProduto' type='text' placeholder='Titulo' onChange={(e)=> setTitle(e.target.value)} />
            <input className='inputProduto' type='Number' placeholder='R$ 00,0' onChange={(e)=> setPreco(e.target.value)} />
            <textarea className="story" rows="10" cols="33" onChange={(e)=> setDesc(e.target.value)} ></textarea>
            <button className='inputProduto colorbutton' type='submit'> Cadastrar </button>
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
