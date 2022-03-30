import React from 'react'
import './Desapego.css'
import Menu from '../../components/Menu/Menu'
import DesapegoCard from '../../components/DesapegoCard/DesapegoCard'
import {useState, useContext} from 'react'
import {Context} from '../../Context/Context'
import api from '../../services/api'

export default function Desapego() {
  
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null)
  

  const { user } = useContext(Context)

  const handleSubmit = async ()=>{
    
    const newPost = {
      username: user.username,
      userwhatsapp: user.whatsapp,
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
      const ress =  await api.post("/desapego", newPost);
      console.log(ress.data)
    }catch(err){}
  }
  return (
    <div className='desapego'>
        <Menu color="red" />
        <div className='sidebarDesapego'>
          <form className='formProdutoDesapego' onSubmit={handleSubmit} >
              <h4 className='produtoFormModal'>Criar produto em Desapego</h4>
              {file && (
                <div className='imgPostPreviw'>
                  <img src={URL.createObjectURL(file)} alt='uploadImg' className='imgPostPreviw' />
                </div>
              )}
              <input className='fotoProduto' type='file' onChange={(e)=> setFile(e.target.files[0])} />
              <input className='inputProduto' type='text' placeholder='Titulo' onChange={(e)=> setTitle(e.target.value)} />
              <textarea className="story" rows="10" cols="33" onChange={(e)=> setDesc(e.target.value)} ></textarea>
              <button className='inputProduto colorbutton' type='submit'> Criar </button>
            </form>
          <div className='sidebarCardDesapego'>
            <DesapegoCard />
          </div>
          <div className='vazioDiv'></div>
        </div>
    </div>
  )
}
