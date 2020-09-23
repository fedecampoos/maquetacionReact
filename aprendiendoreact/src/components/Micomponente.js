import  React ,{Component} from 'react';

class Micomponente extends Component {

    render(){
        let  recetas = {
            nombre : "pizza",
            ingredientes : [ "musarela","tomate","cebolla","harina"],
            calorias : 500 , 
        };

        return (
            <div className = "mi-componente">
            <h1>{ "nombre" + recetas.nombre }</h1>
            <h2>{"calorias "+ recetas.calorias}</h2>
            <hr  />
            
        <ol>
        {
             recetas.ingredientes.map((ingrediente , i)=>{
            console.log(ingrediente);
                return( 
                <li key ={i}>  {ingrediente} </li>
                )
             })
             
             
             
         }
         </ol>
         </div>
        )
    }
}

export default Micomponente ;