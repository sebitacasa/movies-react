import { MoviesGrid } from "./components/MoviesGrid" // importa la funcion que mapea los elementos, o nombres de las peliculas
import styles from "./components/App.module.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";







export function App() { // exporta esta funcion 
    return ( 
           <Router>
             
               <header>
               
                 <Link to="/"> <h1 className={styles.title}>Movies</h1></Link>
                   
                
                   
               </header>
               <main>
               <Switch>
          <Route path="/movie/:movieId">
           <MovieDetails/>
          </Route>
          <Route path="/">
            <LandingPage/>
          </Route>
         
        </Switch>
               </main>
               
           </Router>
           
    );  
   
}

