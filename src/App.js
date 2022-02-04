import './App.css';
import api from './services/api'
import { useEffect, useState } from 'react'

function App() {
  const [hello, setHello] = useState([])
  const getHello = async ()=>{
    try{
      const response = await api.get('/hello');
      const res = response.data;

      if(res.error){
        alert(res.message);
        return false;
      }

      setHello(res);
      console.log(res)

    }catch(err){
      alert(err.message);
    }
  }

  useEffect(() => {
    getHello();
  }, [])

  return (
    <div className="App">
     {/* {hello?.map((post)=>(<h1>{post?.text}</h1>))} */}
     <h1>{hello.text}</h1>
    </div>
  );
}

export default App;