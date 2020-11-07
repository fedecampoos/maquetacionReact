import  React ,{Component} from 'react';
import Slaider from './Slider';
import Sidebar from './Sidebar';

class Blog extends Component {
     
    render(){
        var buttonstring = "ir al blog";
        return (
        <div id="blog"> 
               
            <Slaider title="Blog" />

            <div className ="center"> 
        <div id="content">
            {/*listado de los articulos de la api*/}
        </div>
        <Sidebar/>
        </div>
        </div>
        )
       
         
            
    }
}

export default Blog;
