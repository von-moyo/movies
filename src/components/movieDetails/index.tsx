import styles from './styles.module.scss';

const MovieDetails = ({ movie, gross, awards, votes, metaScore, rating }) => {

  return (
    <div className={styles.details}>
      {movie && <img src={movie.Poster} alt={movie.Title} className={styles.movieImage} />}
      {movie && <h2>{movie.Title} ({movie.Year})</h2>}
      {movie && <p className={styles.category}>Genre: {movie.Genre}</p>}
      {movie && <div className={styles.plot}>
       <p className={`${styles.plott}`}>Plot: {movie.Plot}
        </p>
      </div>}
      {movie && <p className={`${styles.category} ${awards === "red" ? styles.red : styles.green}`}>Awards: {movie.Awards}</p>}
      {movie && <p className={`${styles.category} ${gross === "red" ? styles.red : styles.green}`}>BoxOffice: {movie.BoxOffice}</p>}
      { movie && <p className={`${styles.category} ${metaScore === "red" ? styles.red : styles.green}`}>Metascore: {movie.Metascore}</p>}
      {movie && <p className={`${styles.category} ${rating === "red" ? styles.red : styles.green}`}>Rating: {movie.imdbRating}</p>}
      {movie && <p className={`${styles.category} ${votes === "red" ? styles.red : styles.green}`}>Votes: {movie.imdbVotes}</p>}
    </div>
  );
};

export { MovieDetails };
