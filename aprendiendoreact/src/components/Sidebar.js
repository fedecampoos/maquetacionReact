import  React ,{Component} from 'react';

class Sidebar extends Component {

    render(){

        return( 
        <aside id="sidebar">   
              <div id="nav-blog" className="sidebar-item">
                  <h3>podes hacer esto</h3>
                   <a href="#" className="  btn btn-success"> crear articulo</a>
              </div>
              <div id="search" className="sidebar-item">
                    <h3>buscar</h3>
                  <p>encontra el articulo</p>
                  <form >
                      <input type = "text" name = "search"/>
                       <input type="submit" name= "submit" value="buscar" className="btn"/>
                   </form>
                   <a href="#">crear articulo </a>
               </div>
           </aside>
        );
    }
}
export default Sidebar;