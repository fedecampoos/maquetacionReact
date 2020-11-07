import  React ,{Component} from 'react';

class Pelicula extends Component { 

    marcar =()=>{
        this.props.marcarFavorita(this.props.pelicula, this.props.indice)

    }
    render(){
        const pelicula = this.props.pelicula
        const{titulo , image} = this.props.pelicula

        return(
            <article className="article-item" id="article-template">
            <div className="image-wrap">
                <img src={image} alt={titulo}
                />
            </div>
            <h2>{titulo}</h2>
            <span className="date">
                hace 5 minutos
            </span>
            <a href="#">leer mas</a>
            <button onClick={this.marcar}> 
            marcar como favorita </button>
        </article>
        );
    }
}

export default Pelicula;