import React from 'react'
import Menu from '../../components/Menu/Menu'
import './CadastrarAluguel.css'
import {useState, useContext} from 'react'
import {Context} from '../../Context/Context'
import upload from '../../services/upload'
import api from '../../services/api'

//upload img
async function postImage({image, description}) {
    const formData = new FormData();
    formData.append("image", image)
    formData.append("description", description)
  
    const result = await upload.post('/images', formData, { headers: {'Content-Type': 'multipart/form-data'}})
    return result.data
  }

export default function CadastrarAluguel() {

    //useStates
    const { user } = useContext(Context)
    const [file1, setFile1] = useState(null)
    const [file2, setFile2] = useState(null)
    const [file3, setFile3] = useState(null)
    const [file4, setFile4] = useState(null)
    const [file5, setFile5] = useState(null)
    const [cat, setCat] = useState("")
    const [preco, setPreco] = useState("")
    const [cepp, setCepp] = useState("")
    const [cep, setCep] = useState("")
    const [contrato, setContrato] = useState("")
    const [quarto, setQuarto] = useState("")
    const [sala, setSala] = useState("")
    const [cozinha, setCozinha] = useState("")
    const [banheiro, setBanheiro] = useState("")
    const [area, setArea] = useState("")
    const [desc, setDesc] = useState("")

    const handleSubmit = async (e)=>{
        e.preventDefault()
    
        const newPost = {
          username: user.username,
          userwhatsapp: user.whatsapp,
          categories: cat,
          preco,
          desc,
          cep: cep,
          cidade: cep.localidade,
          contrato,
          quarto,
          sala,
          cozinha,
          banheiro,
          area,

        };
        if(file1){
          try{
            const description = Date.now() + file1.name;
            const result = await postImage({image: file1, description})
            newPost.photo1 = result.imagePath.split("/")[2];
            
            
          }catch(err){}
        }
        if(file2){
          try{
            const description = Date.now() + file2.name;
            const result = await postImage({image: file1, description})
            newPost.photo2 = result.imagePath.split("/")[2];
            
            
          }catch(err){}
        }
        if(file3){
            try{
              const description = Date.now() + file3.name;
              const result = await postImage({image: file1, description})
              newPost.photo3 = result.imagePath.split("/")[2];
              
              
            }catch(err){}
          }
          if(file4){
            try{
              const description = Date.now() + file4.name;
              const result = await postImage({image: file1, description})
              newPost.photo4 = result.imagePath.split("/")[2];
              
              
            }catch(err){}
          }
          if(file5){
            try{
              const description = Date.now() + file5.name;
              const result = await postImage({image: file1, description})
              newPost.photo5 = result.imagePath.split("/")[2];
              
              
            }catch(err){}
          }
        try{
          const res =  await api.post("/aluguel", newPost);
          console.log(res)
        }catch(err){}
      }

      //cep
      const Cepfuncion = async ()=>{
        try{
          const cepSearch = cepp.replace(/\D/g, '');
          console.log(cepSearch)
          await fetch(`https://viacep.com.br/ws/${cepSearch}/json/`)
          .then(res=>res.json()).then(data => setCep(data)
          )
        }catch(err){
          alert(err)
        }
      }

  return (
    <div className='fullContentAluguel'>
        <Menu />
        <header className='headerAluguel'>
            <div className='flexHeaderAluguel'>
                <p className='buttonHeaderAluguelHeaderCadastrar'>Divulgar Casa Em alugar...</p>
            </div>
        </header>
        <div className='contentSideBarForm'>
            <form className='formCadastrarContent' onSubmit={handleSubmit}>
                <i className='headerI'>Adaiciona cinco (5) imagens...</i>
                <div className='imgPhotosHoome'>
                    <label for='foto1' className='labelFoto'><i class="fa-solid fa-circle-plus sizeAdd"></i></label>
                    <input type="file" accept="image/*" id='foto1' required className='inputFotoLabelAlugel'onChange={(e)=> setFile1(e.target.files[0])} />

                    <label for='foto2' className='labelFoto'><i class="fa-solid fa-circle-plus sizeAdd"></i></label>
                    <input type="file" accept="image/*" id='foto2' required className='inputFotoLabelAlugel' onChange={(e)=> setFile2(e.target.files[0])}/>

                    <label for='foto3' className='labelFoto'><i class="fa-solid fa-circle-plus sizeAdd"></i></label>
                    <input type="file" accept="image/*" id='foto3' required className='inputFotoLabelAlugel' onChange={(e)=> setFile3(e.target.files[0])}/>

                    <label for='foto4' className='labelFoto'><i class="fa-solid fa-circle-plus sizeAdd"></i></label>
                    <input type="file" accept="image/*" id='foto4' required className='inputFotoLabelAlugel' onChange={(e)=> setFile4(e.target.files[0])}/>

                    <label for='foto5' className='labelFoto'><i class="fa-solid fa-circle-plus sizeAdd"></i></label>
                    <input type="file" accept="image/*" id='foto5' required className='inputFotoLabelAlugel' onChange={(e)=> setFile5(e.target.files[0])}/>
                </div>
                <div className='inputsFormeCadastrarAluguel'>
                    <div className='precoType'>
                        <input type='text' placeholder='Ex.: Apartamento' required className='precoTypeInput' onChange={(e)=> setCat(e.target.value)}/>
                        <input type='number' placeholder='Preço' required className='precoTypeInput' onChange={(e)=> setPreco(e.target.value)}/>
                    </div>
                    <div className='precoType'>
                        <input type='number' maxLength='2' placeholder='Meses de Contrato' required className='precoTypeInput' onChange={(e)=> setContrato(e.target.value)}/>
                        <input type='text' placeholder='CEP' maxLength='9'
                                minLength='9' required className='precoTypeInput'
                                onChange={(e)=> setCepp(e.target.value)} 
                                onBlur={Cepfuncion}
                        />
                    </div>
                    <div className='precoType'>
                        <input type='number' placeholder='Nº de Quartos' required className='precoTypeInputNumber' onChange={(e)=> setQuarto(e.target.value)}/>
                        <input type='number' placeholder='Nº de Salas' required className='precoTypeInputNumber' onChange={(e)=> setSala(e.target.value)}/>
                        <input type='number' placeholder='Nº de Cozinha' required className='precoTypeInputNumber' onChange={(e)=> setCozinha(e.target.value)}/>
                    </div>
                    <div className='precoType'>
                        <input type='number' placeholder='Nº de Banheiro' required className='precoTypeInput' onChange={(e)=> setBanheiro(e.target.value)}/>
                        <input type='number' placeholder='Nº de Área' required className='precoTypeInput' onChange={(e)=> setArea(e.target.value)}/>
                    </div>
                    <div className='precoType'>
                        <textarea className='forNewDesc' placeholder='Descreve a casa em poucas palavras....' maxLength='200' onChange={(e)=> setDesc(e.target.value)}></textarea>
                    </div>
                    <div className='precoType'>
                        <button type='submit' className='CadastrarcasaEmAluguel'>Cadastrar casa em Aluguel</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
