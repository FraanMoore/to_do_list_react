
import "./App.css";
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  const [inputValue, setInputValue] = useState("")
  const [lista, setLista] = useState([])

  return (
    
    <div className='container' 
    style={{
      padding: "5%",
      border: "10%",
      background: 'url("https://static.vecteezy.com/system/resources/previews/008/508/128/original/watercolor-green-plant-free-png.png")',
      width: "50%", 
    }} >

      <div className="input-group"> 
        <input type="text" aria-label="First name" className="form-control border border-success " placeholder='Título de mis tareas' 
        style={{ 
          fontWeight: 'bold' ,
          color: "#395815",
          bordercolor: "green",
          boxshadow:"none" ,
          outline:"none",
          }}
       />
      </div>

      <div  className="input-group mb-3">
        <input type="text" className="form-control" placeholder="¿Qué harás hoy?" aria-label="Recipient's username" aria-describedby="button-addon2" 
        style={{
          boxshadow: "none",
          outline:"none",
        }}  
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setLista(lista.concat(inputValue));
            setInputValue("");
          }
        }}/>
</div>
        <ul >
        {lista.map((item, index) =>  
          <li className="list-group-item d-flex" 
          style={{
            boxshadow: "none",
            backgroundcolor: "none",
            listStyle: "none",
            bordercolor:"#395815",
          }}>
            <p>{item}{""}
            <button className="btn btn-outline-success justify-content-between"  
            style={{
              border: "none",
              
              fontweight: "bold",
              padding: "5px 5px",
              fontsize: "1.2em",
              borderradius: "10px",
            }}
            onClick={() => setLista(lista.filter((t, currentIndex) => index !== currentIndex))}> X </button>
            </p></li> )}
        </ul>       
      <div> <p className='task'>{lista.length} tareas</p></div>
   
   
    </div>
  );
}

export default App;
