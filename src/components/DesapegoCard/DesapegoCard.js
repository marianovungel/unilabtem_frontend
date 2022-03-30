import React from 'react'
import './DesapegoCard.css'
import api from '../../services/api'
import { useEffect, useState, useContext } from 'react'
import { Context } from '../../Context/Context'

export default function DesapegoCard() {

    const [desapego, setDesapego] = useState([])
    const { user } = useContext(Context)

    useEffect(()=>{
        
        const FetchDesapego = async () => {
            try{
                const res = await api.get("/desapego")
                console.log(res.data)
                setDesapego(res.data)
            }catch(err){
                console.log(err)
            }
        }

        FetchDesapego();
    }, [])

const URLImg = "http://localhost:8000/img/";
    
  return (
    <>
    {desapego.map((p)=>(
    <div className='allCard' key={p.photo}>
        <div className='divHeader'>
            <i id="idImg" className="fa-solid fa-user"></i>
            <p className='SpanUsername'>{ user.username }</p>
        </div>
        <div className='descClassName'>
          <span className='descSpan'>
            {p.desc}
          </span>
        </div>
        <div className='divHero'><img id='heroIgm' 
          src={URLImg + p.photo} alt='#'/></div>
        <div className='divFooter'>
            <span className='spanDate'> {new  Date(p.createdAt).toDateString()} </span>
            <button className='buttonSaiba'>Saiba Mais</button>
        </div>
    </div>
    ))}
    </>
  )
}
// {desapego.map((p)=>(
//     <div className='cardDesapego'>
//             <div className='imgDesapego'>
//                 <img 
//                 id="imgDesapego"
//                 src={URLImg + p.photo}
//                 alt='#' />
//             </div>
//             <div className='descDesapego'>
//                 <div className='titledesapego'>
//                     <span className='spanVazio'></span>
//                     <h3 className='desapegoName titleNewDesapego'>{p.title}</h3>
//                     <span className='desapegodate desapegoName'>{new  Date(p.createdAt).toDateString()}</span>
//                 </div>
//                 <div className='descCardDesapego'>
//                     <span className='desapegodesc desapegoName'>{p.desc}</span>
//                 </div>
//             </div>
//     </div>
//         ))}