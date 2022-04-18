/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import './style.css';

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(()=> {

    function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      fetch(url) //faz as requisicoes http
      .then((r)=>r.json())
      .then((json)=> {
        console.log(json);
        setNutri(json);
      })
    }
    loadApi();
  }, []);

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item)=>{
        return(
          <article key={item.id} className="post">
            <strong className='titulo'>{item.titulo}</strong>
            <img src={item.capa} alt={item.capa}/>
            <p className='subtitulo'>
              {item.subtitulo}
            </p>
            <h1>Categoria: {item.categoria}</h1>
            <a className='botao'>Acessar</a>
          </article>
        )
      })}
    </div>
  );
}

export default App;
