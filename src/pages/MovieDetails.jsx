import movie from "./movie.json"
import styles from "./MovieDetails.module.css"
import { useEffect, useState } from  "react"
import { useParams } from "react-router-dom"
import { get } from "../httpClient";
import { Spinner } from "react-bootstrap";


export function MovieDetails(){
    const { movieId } = useParams()
    const [movie, setMovie] = useState(null);
    
    
    
    useEffect(() => {

     

        get("/movie/" + movieId).then(data => {
          setMovie(data);
          
       
        });
    },[movieId])


   

    

    

    if(!movie){
        return null
    }

    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path

    return <div className={styles.detailsContainer}> 
        <img className={`${styles.colum} ${styles.movieImage}`} src= {imageUrl} alt={movie.title}/> 
      <div className={`${styles.colum} ${styles.movieText} ${styles.firstItem}`}>
      <p><strong>Title:</strong> {movie.title}
        </p>
        <p>
        <strong>Genres:</strong>  {movie.genres.map(genre => genre.name).join(', ')}
        </p>
        <p><strong>Description:</strong> {movie.overview}
        </p>
       
      </div>
        </div>
}