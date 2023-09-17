import styles from './styles.module.scss';

const MovieDetails = ({ movie, gross, awards, votes, metaScore, rating }) => {

  return (
    <div className={styles.details}>
      {movie && <img src={movie.Poster} alt={movie.Title} className={styles.movieImage} />}
      {movie && <h1 className={styles.name}>{movie.Title} ({movie.Year})</h1>}
      {movie && <div className={`${styles.plot} ${styles.genre}`}>
      <p className={`${styles.plott} ${styles.genree}`}>Genre: {movie.Genre}</p>
      </div> }
      {movie && <div className={styles.plot}>
       <p className={`${styles.plott}`}>Plot: {movie.Plot}
        </p>
      </div>}
      {movie && <div className={`${styles.plot} ${awards === "red" ? styles.red : styles.green}`}>
      <p className={`${styles.plott}`}>Awards: {movie.Awards}</p>
      </div> }
      {movie && <p className={`${styles.category} ${gross === "red" ? styles.red : styles.green}`}>BoxOffice: {movie.BoxOffice}</p>}
      { movie && <p className={`${styles.category} ${metaScore === "red" ? styles.red : styles.green}`}>Metascore: {movie.Metascore}</p>}
      {movie && <p className={`${styles.category} ${rating === "red" ? styles.red : styles.green}`}>Rating: {movie.imdbRating}</p>}
      {movie && <p className={`${styles.category} ${votes === "red" ? styles.red : styles.green}`}>Votes: {movie.imdbVotes}</p>}
    </div>
  );
};

export { MovieDetails };
