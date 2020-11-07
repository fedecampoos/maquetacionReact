import  React ,{Component} from 'react';
import Slaider from './Slider';
import Sidebar from './Sidebar'

class Home extends Component {
     
    render(){
        var buttonstring = "ir al blog";
        return (
        <div id="home"> 
               
            <Slaider title="bienvenido :)" btn={buttonstring} />
            <div className ="center"> 
        <div id="content">
            <h1 class="subheader"> ultimos articulos </h1>
        </div>
        <Sidebar/>
        </div>
        </div>
        )
       
         
            
    }
}

export default Home;
