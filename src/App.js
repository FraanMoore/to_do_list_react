import './App.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from 'fontawesome';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  const [inputValue, setInputValue] = useState("")
  const [lista, setLista] = useState([])
  return (
    
    <div className='container' style={{width: "50%"}}>

      <div className="input-group">
        <input id="titulo" type="text" aria-label="First name" className="form-control" placeholder='Titulo de mis tareas' 
       />
      </div>

      <div  className="input-group mb-3">
        <input id='box' type="text" className="form-control" placeholder="¿Qué harás hoy?" aria-label="Recipient's username" aria-describedby="button-addon2" 
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setLista(lista.concat(inputValue));
            setInputValue("");
          }
        }}/>
</div>
        <ul>
        {lista.map((item, index) => 
          <li className='justify-content-between'>
            <p>{item}{""}
            <button className="btn btn-outline-success"  
            onClick={() => setLista(lista.filter((t, currentIndex) => index !== currentIndex))}> X </button>
            </p></li> )}
        </ul>       
      <div> <p className='task'>{lista.length} tareas</p></div>
   
   
    </div>
  );
}

export default App;
