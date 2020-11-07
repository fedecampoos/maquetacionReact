import  React ,{Component} from 'react';
import Micomponente from './Micomponente';

class SeccionPruebas extends Component{


    contador = 0;
    //forma larga
   // constructor(props){
    //  super(props);
     // this.state={
      //  contador:0,
    //  };

  //  }

  state =  {
    contador:0,
  };
      minombre (nombre, edad ){
        var precentacion  = (
           <div>
           <h2> sooy {nombre} </h2>
           <h3> mi edad es {edad}</h3>
           </div>
        );
        return precentacion;
    }
     sumar=(e)=>{
       this.setState({
         contador: this.state.contador+1,
       });
     }

     restar=(e)=>{

      this.setState({
        contador: this.state.contador-1,
      });
     }


    render(){

        var nombre = "fede el mas pro ";

        return(

            <section id="content">      
            <h2 className="subheader">ultimos articulos </h2>
            
            <p>
              hola biencenidos a react de programacion 4 perros 
            </p>
            <h2 className="subheader">funciones</h2>
               {this.minombre( nombre ,22)}
               <h2 className="subheader">componentes </h2>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <section className = "componentes "> 
                   <Micomponente/>
                   <Micomponente/>
               </section>
               <h2 className="subheader">estado </h2>
                   <p> {this.state.contador} </p>
                   <p> 
                     <input type="button" value="sumar" onClick={this.sumar}></input>
                     <input type="button" value="restar" onClick={this.restar}></input>
                   </p>
            </section>
        );


    }

}
export default SeccionPruebas;