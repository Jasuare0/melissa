import React from 'react';//Esto es algo que ya viene importado es un modulo STATELESS
import ReactDOM from 'react-dom';//Esto también 
import App from '../public/App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//Render quiere decir "pinteme lo siguiente"
