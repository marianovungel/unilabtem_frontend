import React from 'react'
import './Aluguel.css'
import Menu from '../../components/Menu/Menu'

export default function Aluguel() {
  return (
    <div className='fullContentAluguel'>
        <Menu />
        <header className='headerAluguel'>
            <div className='flexHeaderAluguel'>
                <button id='alugarCasa' className='buttonHeaderAluguel'>Aluguel</button>
                <button className='buttonHeaderAluguel'>Compartilhamento</button>
                <button className='buttonHeaderAluguel'>Postar Casa...</button>
                <form className='formSearchAluguelHeader'>
                    <input className='inputParaPesquisarAluguel' type='search' placeholder='Pesquise por cidade...' minLength='1' />
                    <button type='submit' className='botaoDePesquisaAluguel'>Pesquisar...</button>
                </form>
            </div>
        </header>
        <div className='contentSideBar'>
            <div className='cardAluguel'>
                <img className='imgAluguelCard' src='https://i.mgfserv.com/360x270/aHR0cDovL2ltZy5vbHguY29tLmJyL2ltYWdlcy82OC82ODc1MjkxMDI0MTMxODAuanBn.jpg' alt='' />
                <div className='descPlaceAluguel'>
                    <div className='ajustPositionDesc'>
                        <p><i>Categoria</i>: <b>Apartamento</b></p>
                        <p><i>Cidade</i>: <b>Redenção</b></p>
                        <p><i>Preço</i>: <b>R$530</b></p>
                        <p><i>Status</i>: <b>Desponível</b></p>
                    </div>
                    <button className='buttonHeaderAluguela'>Mais informações</button>
                </div>
            </div>
            <div className='cardAluguel'>
                <img className='imgAluguelCard' src='https://cdn.uso.com.br/32326/2019/06/97001032.jpg' alt='' />
                <div className='descPlaceAluguel'>
                    <div className='ajustPositionDesc'>
                        <p><i>Categoria</i>: <b>Apartamento</b></p>
                        <p><i>Cidade</i>: <b>Redenção</b></p>
                        <p><i>Preço</i>: <b>R$530</b></p>
                        <p><i>Status</i>: <b>Desponível</b></p>
                    </div>
                    <button className='buttonHeaderAluguela'>Mais informações</button>
                </div>
            </div>
            <div className='cardAluguel'>
                <img className='imgAluguelCard' src='https://imgbr.imovelwebcdn.com/avisos/2/29/33/01/57/29/720x532/1045272687.jpg' alt='' />
                <div className='descPlaceAluguel'>
                    <div className='ajustPositionDesc'>
                        <p><i>Categoria</i>: <b>Apartamento</b></p>
                        <p><i>Cidade</i>: <b>Redenção</b></p>
                        <p><i>Preço</i>: <b>R$530</b></p>
                        <p><i>Status</i>: <b>Desponível</b></p>
                    </div>
                    <button className='buttonHeaderAluguela'>Mais informações</button>
                </div>
            </div>
            <div className='cardAluguel'>
                <img className='imgAluguelCard' src='https://www.jxavier.com.br/jxavier/site/assets/images/properties/818x540/7189_22696.jpg' alt='' />
                <div className='descPlaceAluguel'>
                    <div className='ajustPositionDesc'>
                        <p><i>Categoria</i>: <b>Apartamento</b></p>
                        <p><i>Cidade</i>: <b>Redenção</b></p>
                        <p><i>Preço</i>: <b>R$530</b></p>
                        <p><i>Status</i>: <b>Desponível</b></p>
                    </div>
                    <button className='buttonHeaderAluguela'>Mais informações</button>
                </div>
            </div>
        </div>
    </div>
  )
}
