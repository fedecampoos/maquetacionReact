import  React ,{Component} from 'react';
import logo from "../assets/images/logo.svg";
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
                    <a href="index.html">inicio </a>
                </li>
                <li>
                    <a href="blog.html">blog </a>
                </li>
                <li>
                    <a href="formulario.html">formulario</a>
                </li>
                <li>
                    <a href="article.html">pag 1 </a>
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