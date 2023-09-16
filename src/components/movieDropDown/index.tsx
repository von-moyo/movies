import React from "react";
import styles from "./styles.module.scss";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Poster?: string;
}

interface MovieDropdownProps {
  onSelectMovie: (movie: any) => void;
  movies: Movie[];
}

const MovieDropDown: React.FC<MovieDropdownProps> = ({ movies, onSelectMovie }) => {
  return (
    <ul className={styles.list}>
      {movies.map((movie) => (
        <li className={styles.item} key={movie.imdbID} onClick={() => onSelectMovie(movie)}>
          <img src={movie.Poster} alt={movie.Title} className={styles.movieImage} />
          {movie.Title} ({movie.Year})
        </li>
      ))}
    </ul>
  );
};

export { MovieDropDown };
