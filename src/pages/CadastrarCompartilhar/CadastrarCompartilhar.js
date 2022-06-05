import React from 'react'
import Menu from '../../components/Menu/Menu'
import './CadastrarCompartilhar.css'

export default function CadastrarAluguel() {
  return (
    <div className='fullContentAluguel'>
        <Menu />
        <header className='headerAluguel'>
            <div className='flexHeaderAluguel'>
                <p className='buttonHeaderAluguelHeaderCadastrar'>Divulgar Casa Em Compartilhamento...</p>
            </div>
        </header>
        <div className='contentSideBarForm'>
            <form className='formCadastrarContent'>
                <i className='headerI'>Adaiciona cinco (5) imagens...</i>
                <div className='imgPhotosHoome'>
                    <label for='foto1' className='labelFoto'><i class="fa-solid fa-circle-plus sizeAdd"></i></label>
                    <input type="file" accept="image/*" id='foto1' required className='inputFotoLabelAlugel' />

                    <label for='foto2' className='labelFoto'><i class="fa-solid fa-circle-plus sizeAdd"></i></label>
                    <input type="file" accept="image/*" id='foto2' required className='inputFotoLabelAlugel' />

                    <label for='foto3' className='labelFoto'><i class="fa-solid fa-circle-plus sizeAdd"></i></label>
                    <input type="file" accept="image/*" id='foto3' required className='inputFotoLabelAlugel' />

                    <label for='foto4' className='labelFoto'><i class="fa-solid fa-circle-plus sizeAdd"></i></label>
                    <input type="file" accept="image/*" id='foto4' required className='inputFotoLabelAlugel' />

                    <label for='foto5' className='labelFoto'><i class="fa-solid fa-circle-plus sizeAdd"></i></label>
                    <input type="file" accept="image/*" id='foto5' required className='inputFotoLabelAlugel' />
                </div>
                <div className='inputsFormeCadastrarAluguel'>
                    <div className='precoType'>
                        <input type='text' placeholder='Ex.: Apartamento' required className='precoTypeInput' />
                        <input type='number' placeholder='Preço' required className='precoTypeInput' />
                    </div>
                    <div className='precoType'>
                        <input type='number' maxLength='2' placeholder='Meses de Contrato' required className='precoTypeInput' />
                        <input type='text' placeholder='CEP' maxLength='9'
                                minLength='9' required className='precoTypeInput' 
                        />
                    </div>
                    <div className='precoType'>
                        <input type='number' placeholder='Nº de Quartos' required className='precoTypeInputNumber' />
                        <input type='number' placeholder='Nº de Salas' required className='precoTypeInputNumber' />
                        <input type='number' placeholder='Nº de Cozinha' required className='precoTypeInputNumber' />
                    </div>
                    <div className='precoType'>
                        <input type='number' placeholder='Nº de Banheiro' required className='precoTypeInput' />
                        <input type='number' placeholder='Nº de Área' required className='precoTypeInput' />
                    </div>
                    <div className='precoType'>
                        <textarea className='forNewDesc' placeholder='Descreve a casa em poucas palavras....' maxLength='200'></textarea>
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
