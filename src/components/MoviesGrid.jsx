import { useEffect, useState } from  "react"
import { MovieCard } from './MovieCard' // este contiene las imagenes 
import styles from "./MovieGrid.module.css"
import { get } from "../httpClient"



export  function MoviesGrid(){ // traducimos el archivo a un array y lo develvemos dentro de un <li>

  const [movies, setMovies] = useState([]);
  
  useEffect(()=>{
    get("/discover/movie")
    .then((data)=> {
      setMovies(data.results)
    })
  },[])

  return (
      <ul className={styles.moviesGrid}>
          {movies.map((movie)=><MovieCard key={movie.id} movie={movie}/>)} 
      </ul>
  )
}