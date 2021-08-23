import './styles.css';
import movieImage from 'assets/images/movie-image.png';
const MovieCard = () => {
    return (
        <div className="base-card card-container">
            <div className="image-container">
                <img src={movieImage} alt="portada" />
            </div>
            <div className="content-container">
                <h1>O Retorno do Rei</h1>
                <h2>2013</h2>
                <p>O olho do inimigo está se movendo.</p>
            </div>
        </div>
    );
}

export default MovieCard;