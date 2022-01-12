import movies from "./movies.json";

export function MoviesGrid() {
    return (
    <ul>
      {movies.map((movie)=>
          <li key={movie.id}>{movie.title}</li>
      )}
    </ul>
    );
}