import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import './components/Micomponente';

import Header from './components/Header';
import Slaider from './components/Slider';
import Sidebar from './components/Sidebar'
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPuebas';
import Peliculas from './components/Peliculas';

  

function App() {
 var buttonstring = "ir al blog"
  
  return (
    <div className="App">
      <Header/>
      <Slaider title="bienvenido :)" btn={buttonstring} />
     
      <div className ="center"> 
        <Peliculas/>
        <Sidebar/>
     <div className="clearFix"> </div>
     <div/>
    </div>
    <Footer/>
     </div>
  );
} 

export default App;
