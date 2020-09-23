import  React ,{Component} from 'react';

class Pelicula extends Component { 

    render(){
        const{titulo , image} = this.props.pelicula

        return(
            <article class="article-item" id="article-template">
            <div class="image-wrap">
                <img src={image} alt={titulo}
                />
            </div>
            <h2>{titulo}</h2>
            <span class="date">
                hace 5 minutos
            </span>
            <a href="#">leer mas</a>
        </article>
        );
    }
}

export default Pelicula;