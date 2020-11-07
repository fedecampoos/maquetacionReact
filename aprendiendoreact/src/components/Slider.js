import React, {component, Component} from 'react';

class Slaider extends Component {

    render(){
        
        return(

            <div id="slider"  className="slider-big">
          <h1>{this.props.title}</h1>
          
          {this.props.title &&
            <a href="#" className="btn-white"> {this.props.btn}</a>
          }
           
     </div>

        );
    }
}

export default Slaider;