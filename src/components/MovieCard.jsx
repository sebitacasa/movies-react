import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styles from './MovieCard.module.css'
import imagen from '../images/pexels-cottonbro-3945317.jpg'



export function MovieCard({movie}){

    const imageUrl = movie.poster_path  ?
     "https://image.tmdb.org/t/p/w300" + movie.poster_path 
     : imagen;
    
    return ( 
    
    <li className={styles.movieCard}>
        <Link to = {"/movie/" + movie.id}>
        <img  
        className={styles.movieImage}
         src={imageUrl}
         alt={"img not found"}
         width={230} 
        height={345} 
         
         
         
         />
        <div className={styles.ttle}>{movie.title}</div>
        </Link>
       
        </li>

    )
        
}