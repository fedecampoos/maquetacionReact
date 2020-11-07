import  React ,{Component} from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import SeccionPruebas from './components/SeccionPruebas'; 
import Peliculas from './components/Peliculas';
import Micomponente from './components/Micomponente'; 
import Error from './components/Error';
import Home from './components/Home';
import Header from './components/Header';


import Footer from './components/Footer';

//import SeccionPruebas from './components/SeccionPuebas';
//import Peliculas from './components/Peliculas';
import Blog from './components/Blog';

class  Router extends Component{

    render(){
        
        return(
            <BrowserRouter>
             <Header/>
                  
                 
              
                {/*configurar rutas y paginas */}
                <Switch>
                    
                    <Route exact path="/" component={Home }/>
                    <Route exact path="/home" component={Home }/>
                    <Route  exact path="/blog" Component={Blog }/>
                    <Route  exact path="/segunda-ruta" Component={Micomponente }/>
                    
                    <Route exact path="/pagina-1" render ={() =>(  
                        <div> 
                        <h1> chicos estamos en la pagina 1  </h1>
                        <Micomponente saludo="hola como estas TODO BIEN TODO CORRECTO Y YO QUE ME ALEGRO  " />
                        </div>
                    )}/>

                    <Route exact path="/pruebas/:nombre/:apellidos?" render={(props) =>{
                       var nombre = props.match.params.nombre;
                       var apellidos = props.match.params.apellidos;

                       return (
                        <div id="content"> 
                        <h1 class="subheadear" >pagina de pruebas </h1>
                       
                        <h2>
                            {
                            nombre && !apellidos &&

                           <span>  {nombre} </span> 
                    }
                            {
                            nombre && apellidos &&
                            
                                <span>  {nombre} {apellidos} </span> 
                            }
                            </h2>
                        </div>
                    )
                    }}/>
                    <Route component ={Error}/>
                    
                </Switch>
                
                 <div className="clearFix"> </div>
                 <div/>
                  
                   <Footer/>
            </BrowserRouter>

        );
    }
}

export default Router;   