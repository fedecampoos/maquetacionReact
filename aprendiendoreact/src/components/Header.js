import  React ,{Component} from 'react';
import logo from "../assets/images/logo.svg";
import { NavLink } from 'react-router-dom';

class Header extends Component  {

  render() {
      return(
    <header id ="header">
         <div className ="center">  
           
            <div id = "logo"> 
                <img src={logo} className  ="app-logo" alt="logotipo"/>

                <span id = "drand">
                    <strong> blog </strong>nslp
                </span>

        </div>

        
        <nav id ="menu">
            <ul>
                <li>
                    <NavLink to="/home" activeClassName="active">inicio </NavLink>
                </li>
                <li>
                    <NavLink to="/Blog" activeClassName="active">blog  </NavLink>
                </li>
                <li>
                <NavLink to="/segunda-ruta" activeClassName="active">formulario </NavLink>
                </li>
                <li>
                <NavLink to="/pagina-1" activeClassName="active">pagina 1 </NavLink>
                </li>


            </ul>

        </nav>
        <div  className="clearfix ">  </div>
    </div>
         
     </header>
      );
  }
}
export default Header;