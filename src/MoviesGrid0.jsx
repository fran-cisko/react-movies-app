import {MovieCard} from "./MovieCard";
import movies from "./movies.json";
import styles from "./MoviesGrid.modules.css";

export function MoviesGrid() {
    return (
    <ul className={styles.grid}>
      {movies.map((movie)=>(
      <MovieCard  key={movie.id} movie={movie} />
      ))}   
    </ul>
    );
}